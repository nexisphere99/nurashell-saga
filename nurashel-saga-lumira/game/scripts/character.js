Macro.add("leo", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-leo">' +
                     '<img class="portrait" src="images/characters/leo/leo.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Leo</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("ava", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-ava">' +
                     '<img class="portrait" src="images/characters/ava/ava.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Ava</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("avan", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-avan">' +
                     '<img class="portrait" src="images/characters/avan/avan.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Avan</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("leona", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-leona">' +
                     '<img class="portrait" src="images/characters/leona/leona.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Leona</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("jenna", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-jenna">' +
                     '<img class="portrait" src="images/characters/jenna/jenna.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Jenna</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("natalie", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-natalie">' +
                     '<img class="portrait" src="images/characters/natalie/natalie.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Natalie</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("marcus", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-marcus">' +
                     '<img class="portrait" src="images/characters/marcus/marcus.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Marcus</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("dylan", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-dylan">' +
                     '<img class="portrait" src="images/characters/dylan/dylan.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Dylan</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("jamie", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-jamie">' +
                     '<img class="portrait" src="images/characters/jamie/jamie.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Jamie</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});



Macro.add("rowan", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-rowan">' +
                     '<img class="portrait" src="images/characters/rowan/rowan.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Rowan</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});



Macro.add("agent", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-agent">' +
                     '<img class="portrait" src="images/characters/agent/agent.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Agent</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("system", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-system">' +
                    //  '<img class="portrait" src="images/characters/agent/agent.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">System</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("img", {
    handler() {
        let file = this.args[0];
        let type = this.args[1] || "scene"; // "header", "scene", "right", "left"
        let cls = "";

        switch (type) {
            case "header": cls = "passage-header-img"; break;
            case "scene": cls = "scene-image"; break;
            case "right": cls = "illus-right"; break;
            case "left": cls = "illus-left"; break;
        }

        let html =
            `<div class="${cls}">
                <img src="${file}">
             </div>`;

        $(this.output).wiki(html);
    }
});
