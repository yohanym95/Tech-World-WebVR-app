var googlebox = document.getElementById("google1");
var applebox = document.getElementById("apple1");
var facebookbox = document.getElementById("facebook1");
var amazonbox = document.getElementById("amazon1");
var huaweibox = document.getElementById("huawei1");
var microsoftbox = document.getElementById("microsoft1");
var samsungbox = document.getElementById("samsung1");
var intelbox = document.getElementById("intel1");
var ibmbox = document.getElementById("ibm1");

var googlebuilding = document.getElementById("googlebuilding");
var applebuilding = document.getElementById("applebuilding");
var facebookbuilding = document.getElementById("facebookbuilding");
var amazonbuilding = document.getElementById("amazonbuilding");
var huaweibuilding = document.getElementById("huaweibuilding");
var microsoftbuilding = document.getElementById("microsoftbuilding");
var samsungbuilding = document.getElementById("samsungbuilding");
var intelbuilding = document.getElementById("intelbuilding");
var ibmbuilding = document.getElementById("ibmbuilding");

googlebuilding.addEventListener("mouseenter", function () {
    googlebox.setAttribute("scale",

        {
            x: 4,
            y: 4,
            z: 4
        }

    );
    googlebuilding.setAttribute("color", "yellow");
});

googlebuilding.addEventListener("mouseleave", function () {
    googlebox.setAttribute("scale",

        {
            x: 2,
            y: 2,
            z: 2
        }

    );

    googlebuilding.setAttribute("color", "grey");
});

applebuilding.addEventListener("mouseleave", function () {
    applebox.setAttribute("scale",

        {
            x: 2,
            y: 2,
            z: 2
        }

    );

    applebuilding.setAttribute("color", "grey");
});

applebuilding.addEventListener("mouseenter", function () {
    applebox.setAttribute("scale",

        {
            x: 4,
            y: 4,
            z: 4
        }

    );
    applebuilding.setAttribute("color", "black")
});



facebookbuilding.addEventListener("mouseenter", function () {
    facebookbox.setAttribute("scale",

        {
            x: 4,
            y: 4,
            z: 4
        }

    );
    facebookbuilding.setAttribute("color", "blue")
});

facebookbuilding.addEventListener("mouseleave", function () {
    facebookbox.setAttribute("scale",

        {
            x: 2,
            y: 2,
            z: 2
        }

    );
    facebookbuilding.setAttribute("color", "grey")
});

amazonbuilding.addEventListener("mouseenter", function () {
    amazonbox.setAttribute("scale",

        {
            x: 4,
            y: 4,
            z: 4
        }

    );
    amazonbuilding.setAttribute("color", "orange")
});

amazonbuilding.addEventListener("mouseleave", function () {
    amazonbox.setAttribute("scale",

        {
            x: 2,
            y: 2,
            z: 2
        }

    );
    amazonbuilding.setAttribute("color", "grey")
});

huaweibuilding.addEventListener("mouseenter", function () {
    huaweibox.setAttribute("scale",

        {
            x: 4,
            y: 4,
            z: 4
        }

    );
    huaweibuilding.setAttribute("color", "red")
});

huaweibuilding.addEventListener("mouseleave", function () {
    huaweibox.setAttribute("scale",

        {
            x: 2,
            y: 2,
            z: 2
        }

    );

    huaweibuilding.setAttribute("color", "grey")
});

microsoftbuilding.addEventListener("mouseenter", function () {
    microsoftbox.setAttribute("scale",

        {
            x: 4,
            y: 4,
            z: 4
        }

    );

    microsoftbuilding.setAttribute("color", "green")
});

microsoftbuilding.addEventListener("mouseleave", function () {
    microsoftbox.setAttribute("scale",

        {
            x: 2,
            y: 2,
            z: 2
        }

    );

    microsoftbuilding.setAttribute("color", "grey")
});


samsungbuilding.addEventListener("mouseenter", function () {
    samsungbox.setAttribute("scale",

        {
            x: 4,
            y: 4,
            z: 4
        }

    );

    samsungbuilding.setAttribute("color", "blue")
});

samsungbuilding.addEventListener("mouseleave", function () {
    samsungbox.setAttribute("scale",

        {
            x: 2,
            y: 2,
            z: 2
        }

    );

    samsungbuilding.setAttribute("color", "grey")
});

intelbuilding.addEventListener("mouseenter", function () {
    intelbox.setAttribute("scale",

        {
            x: 4,
            y: 4,
            z: 4
        }

    );

    intelbuilding.setAttribute("color", "blue")
});

intelbuilding.addEventListener("mouseleave", function () {
    intelbox.setAttribute("scale",

        {
            x: 2,
            y: 2,
            z: 2
        }

    );

    intelbuilding.setAttribute("color", "grey")
});

ibmbuilding.addEventListener("mouseenter", function () {
    ibmbox.setAttribute("scale",

        {
            x: 4,
            y: 4,
            z: 4
        }

    );

    ibmbuilding.setAttribute("color", "white")
});

ibmbuilding.addEventListener("mouseleave", function () {
    ibmbox.setAttribute("scale",

        {
            x: 2,
            y: 2,
            z: 2
        }

    );

    ibmbuilding.setAttribute("color", "grey")
});
