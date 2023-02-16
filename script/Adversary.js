class Adversary {
    constructor(root, adv, level) {
        this.root = root;
        this.level = level;
        this.accordion = this.root.find("div#accordionGroup").first();
        this.data = adversaries[adv];
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

    static createCard(title, body) {
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
        this.root.find("div#name").first().append(
            $("<h1/>", {
                class: "spiritname",
                text: this.data.name + " " + this.level
        }))
    }

    setLoss() {
        this.root.find("div#loss").first().append(Adversary.createCard("Loss&nbsp;Condition:&nbsp;<wbr/>" + this.data.loss.name.replaceAll(" ", "&nbsp;"), this.data.loss.desc));
    }
    
    setEscalation() {
        this.root.find("div#escalation").first().append(Adversary.createCard("Escalation:&nbsp;<wbr/>" + this.data.escalation.name.replaceAll(" ", "&nbsp;"), this.data.escalation.desc));
    }
    
    getInvaderCard() {
        var invader_label="";
        var invader_deck="";
        
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
            return Adversary.createCard("Invader Deck", invader_deck);
        }

        return null;
    }
    
    createSection(section, deletable=false) {
        //Create accordion entry
        var acc_item = this.createAccordionItem(section[0].toUpperCase() + section.slice(1).toLowerCase(), section, deletable);

        //Create cards
        var acc_body = acc_item.find("div.accordion-body").first();
        var arr=this.data[section];


        //if setup section, add fear and invader deck 
        if(section == "setup") {
            acc_body.append(Adversary.createCard("Fear&nbsp;Deck", this.data.fear[this.level-1].replaceAll(" ", "&nbsp;")));
            var invader_deck = this.getInvaderCard();
            if(invader_deck != null) {
                acc_body.append(invader_deck);
            }
        }

        //iterate over section contents
        for(var i=0; i<arr.length; i++) {
            var c = arr[i];
            if(c.level <= this.level) {
                acc_body.append(Adversary.createCard(c.name, c.desc));
            }
        }

        //only add section if it has cards in it
        if(acc_body.children().length>0) {
            this.accordion.append(acc_item);
        }
    }
}