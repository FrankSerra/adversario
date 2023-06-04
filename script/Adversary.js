class Adversary {
    constructor(root, adv, level, supportadv="", supportlevel=1) {
        this.root = root;
        this.level = level;
        this.accordion = this.root.find("div#accordionGroup").first();
        this.data = adversaries[adv];
        
        this.supportdata = null;
        this.supportlevel = null;

        if(supportadv != "") {
            this.supportdata = adversaries[supportadv];
            this.supportlevel = supportlevel;
        }
    }

    calc() {
        this.setName();
        this.setLoss();
        this.setEscalation();
        this.createSection("setup", true);
        this.createSection("explore");
        this.createSection("build");
        this.createSection("ravage");
        this.createSection("other");
    }

    static createCard(title, body, addSupportReminder=false) {
        //replace icons
        const ico = Object.keys(icons);
        for(var i=0; i<ico.length; i++) {
            body = body.replaceAll(ico[i], "<span style=\"display:inline-block;\">" + icons[ico[i]] +"</span>");
        }

        return $("<div/>", {
                class: "card",
            }).append($("<div/>", {
                class: "card-body"
                }).append($("<h6/>", {
                    class: "card-title",
                    html: title
                })).append($("<p/>", {
                    class: "card-text",
                    html: body
                })).append($("<p/>", {
                    class: addSupportReminder? "fst-italic" : "d-none",
                    html: addSupportReminder? "(randomly choose one of the two terrain types from the Stage III card and only resolve this against the chosen terrain)" : ""
                }))
            );
    }

    createAccordionItem(title, divid, deletable) {
        var node = $("<div/>", {class: "accordion-item"}).append(
            $("<h2/>", {class: "accordionHeader", id: divid + "-header"}).append(
                $("<button/>", {
                    class: "accordion-button",
                    type: "button",
                    'data-bs-toggle': "collapse",
                    'data-bs-target': "#collapse-" + divid,
                    'aria-expanded': "true",
                    'aria-controls': "collapse-" + divid,
                    text: title
                })
            )
        ).append(
            $("<div/>", {
                id: "collapse-" + divid,
                class: "accordion-collapse collapse show",
                'aria-labelledby': divid + "-header",
                'data-bs-parent': "#" + this.accordion.id
            }).append(
                $("<div/>", {class: "accordion-body", id: divid})
            )
        );
        
        if(deletable) {
            node.append(
                $("<div/>", {class: "accordion-body", id: divid}).append(
                    $("<button/>", {
                        class: "btn btn-danger",
                        text: "Setup complete",
                        onclick: "removeSetup()"
                    })
                )
            )
        }

        return node;
    }

    setName() {
        const node = this.root.find("div#name").first();
        node.append(
            $("<h1/>", {
                class: "spiritname",
                text: this.data.name + " " + this.level
        }));

        if(this.supportdata) {
            node.append(
            $("<h2/>", {
                class: "spiritname",
                text: "+ " + this.supportdata.name + " " + this.supportlevel
        }));
        }
    }

    setLoss() {
        this.root.find("div#loss").first().append(Adversary.createCard("Loss&nbsp;Condition:&nbsp;<wbr/>" + this.data.loss.name.replaceAll(" ", "&nbsp;"), this.data.loss.desc));

        if(this.supportdata) {
            this.root.find("div#supportloss").first().append(Adversary.createCard("Loss&nbsp;Condition:&nbsp;<wbr/>" + this.supportdata.loss.name.replaceAll(" ", "&nbsp;"), this.supportdata.loss.desc));
        }
    }
    
    setEscalation() {
        this.root.find("div#escalation").first().append(Adversary.createCard((this.supportdata? "Stage 2 " : "") + "Escalation:&nbsp;<wbr/>" + this.data.escalation.name.replaceAll(" ", "&nbsp;"), this.data.escalation.desc));

        if(this.supportdata) {
            this.root.find("div#supportescalation").first().append(
                Adversary.createCard(
                    "Stage 3 Escalation:&nbsp;<wbr/>" + this.supportdata.escalation.name.replaceAll(" ", "&nbsp;"), 
                    this.supportdata.escalation.desc,
                    (this.supportdata.escalation.desc.includes("terrain") || this.supportdata.escalation.desc.includes("explor") || this.supportdata.escalation.desc.includes("Explor"))
                )
            );
        }
    }
    
    getInvaderCard() {
        var invader_label="Invader Deck: ";
        var invader_deck="";
        var lead_card = null
        
        var support_label="Invader Deck: ";
        var support_deck="";
        var support_card = null;
        
        //lead invader deck
        for(var i=0; i<this.data.invader.length; i++) {
            var c = this.data.invader[i];
            if(c.level <= this.level) {
                invader_label = invader_label + c.name  + ", ";
                invader_deck = c.desc;
            }
        }
        if(invader_label.endsWith(", ")) {
            invader_label = invader_label.substring(0, invader_label.length-2);
        }
        if(invader_deck != "") {
            lead_card = Adversary.createCard(invader_label, invader_deck);
        }

        //support invader deck
        if(this.supportdata){
            for(var i=0; i<this.supportdata.invader.length; i++) {
                var c = this.supportdata.invader[i];
                if(c.level <= this.supportlevel) {
                    support_label = support_label + c.name  + ", ";
                    support_deck = c.desc;
                }
            }
            if(support_label.endsWith(", ")) {
                support_label = support_label.substring(0, support_label.length-2);
            }
            if(support_deck != "") {
                support_card = Adversary.createCard(support_label, support_deck);
            }
        }

        if(!lead_card && !support_card) {
            return null;
        }
        else if(lead_card && !support_card) {
            return lead_card;
        }
        else if (support_card && !lead_card) {
            return support_card;
        }

        return Adversary.createCard("Invader Deck: Complex Modifications", "Both adversaries modify the invader deck! You will have to do this yourself. First perform all modifications of the Support adversary, then perform all modifications of the Lead adversary. If an instruction is impossible, ignore it. If you have to remove a card and it is ambiguous, remove the top-most applicable card. If you have to change a card's position and it is ambiguous, change the position of the bottom-most applicable card.")
    }

    getComboFear() {
        var combo = [];
        var lead = this.data.fear[this.level-1].split(" / ");
        var support = this.supportdata.fear[this.supportlevel-1].split(" / ");
        
        for(var i=0; i<3; i++) {
            combo.push(parseInt(lead[i]) + parseInt(support[i]) - 3);
        }

        return combo.join(" / ");
    }
    
    createSection(section, deletable=false) {
        //Create accordion entry
        var acc_item = this.createAccordionItem(section[0].toUpperCase() + section.slice(1).toLowerCase(), section, deletable);

        //Create cards
        var acc_body = acc_item.find("div.accordion-body").first();
        var arr=[];

        //leader - trim for level and check for replacements
        for(var i=0; i<this.data[section].length; i++) {
            if(this.data[section][i].level <= this.level) {
                arr.push(this.data[section][i])

                if(Object.keys(this.data[section][i]).includes("replaces")) {
                    arr = arr.filter(item => {return item.name != this.data[section][i].replaces});
                }
            }
        }

        //support - trim for level and check for replacements
        if(this.supportdata) {
            for(var i=0; i<this.supportdata[section].length; i++) {
                if(this.supportdata[section][i].level <= this.supportlevel) {
                    arr.push(this.supportdata[section][i])

                    if(Object.keys(this.supportdata[section][i]).includes("replaces")) {
                        arr = arr.filter(item => {return item.name != this.supportdata[section][i].replaces});
                    }
                }
            }
        }

        //if setup section, add fear, invader deck, and combo notes
        if(section == "setup") {
            //check for combination notes
            if(this.supportdata) {
                if(this.data.combiningnotes) {
                    acc_body.append(Adversary.createCard(this.data.name + " Combining Modifier", this.data.combiningnotes));        
                }

                if(this.supportdata.combiningnotes) {
                    acc_body.append(Adversary.createCard(this.supportdata.name + " Combining Modifier", this.supportdata.combiningnotes));
                }
            }

            //fear
            var fear = this.data.fear[this.level-1].replaceAll(" ", "&nbsp;");
            if(this.supportdata) {
                fear = this.getComboFear();
            }
            acc_body.append(Adversary.createCard("Fear&nbsp;Deck", fear));
            
            //invader deck
            var invader_deck = this.getInvaderCard();
            if(invader_deck != null) {
                acc_body.append(invader_deck);
            }
        }

        //iterate over section contents
        for(var i=0; i<arr.length; i++) {
            acc_body.append(Adversary.createCard(arr[i].name, arr[i].desc));
        }

        //only add section if it has cards in it
        if(acc_body.children().length>0) {
            this.accordion.append(acc_item);
        }
    }
}