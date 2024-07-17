//Function Creating For Header Menu
document.addEventListener('DOMContentLoaded', function () {
    const dynamicHeader = document.getElementById('dynamicHeader');

    // Create header elements
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    // Create main menu items
    const homeItem = createMenuItem('Home', '/script/index.html');
    ul.appendChild(homeItem);

    
    const partOne = createMenuItem('One','#');
    
    // Create submenu for 'one'
    const subPartOne = document.createElement('ul');
    subPartOne.appendChild(createMenuItem('Bacic_Calculators', '/script/one/Calculators/calculator.html'));
    subPartOne.appendChild(createMenuItem('IF Else', '/script/one/if-else/if-else.html'));
    subPartOne.appendChild(createMenuItem('Celsius To Fahrenheit','/script/one/Calculators/cel-frn.html'));
    subPartOne.appendChild(createMenuItem('Fahrenheit to Celsius','/script/one/Calculators/frn-cel.html'));
    subPartOne.appendChild(createMenuItem('1+2+3+....99','/script/one/Calculators/sub/1+2+3+4.html'));
    subPartOne.appendChild(createMenuItem('Km-Mi-Km Converter','/script/one/Calculators/km-mi.html'));
    subPartOne.appendChild(createMenuItem('USE Switch','/script/one/c17-switch/switch.html'));
    subPartOne.appendChild(createMenuItem('For Loop','/script/one/c18-Loop/loop.html'));
    subPartOne.appendChild(createMenuItem('Sum Loop','/script/one/c18-Loop/sumLoop.html'));
    subPartOne.appendChild(createMenuItem('While Loop','/script/one/c20-21-whileLoop/while.html'));
    
    partOne.appendChild(subPartOne);
    ul.appendChild(partOne);
    
    
    const partTwo = createMenuItem('Two','#');
      // Create submenu for 'two'
    const subPartTwo = document.createElement('ul');
    subPartTwo.appendChild(createMenuItem('Break_Continue','/script/two/c22-break-and-continue/break.html'));
    subPartTwo.appendChild(createMenuItem('Tarnary Op','/script/two/c23-ternary/ternary.html'));
    subPartTwo.appendChild(createMenuItem('Traditional Function','/script/two/c-24-traditional-function/function.html'));
    subPartTwo.appendChild(createMenuItem('IIFEs Function','/script/two/c-25-IIFEs-function/ifefunction.html'));
    subPartTwo.appendChild(createMenuItem('Array','/script/two/c-26-array/array.html'));
    subPartTwo.appendChild(createMenuItem('Arry in Loop','/script/two/c-27-array-in-loop/aryloop.html'));
    subPartTwo.appendChild(createMenuItem('Array Methods','/script/two/c-28-array-method/arraymethod.html'));
    subPartTwo.appendChild(createMenuItem('1 D Array','/script/two/c-29-1d-array/1darray.html'));
    subPartTwo.appendChild(createMenuItem('2 D Array','/script/two/c-30-2D-array/2darray.html'));

    partTwo.appendChild(subPartTwo);
    ul.appendChild(partTwo);

    const partThree = createMenuItem('Three', '#');

    // Create submenu for "three"
    const subPartThree = document.createElement('ul');
    subPartThree.appendChild(createMenuItem('Create Object', '/script/three/c-31-create-object/object.html'));
    subPartThree.appendChild(createMenuItem('Math Object', '/script/three/c-32-math-object/math-object.html'));
    subPartThree.appendChild(createMenuItem('Gussing Game', '/script/three/c-33-guessing-math-game/guessing-math-game.html'));
    subPartThree.appendChild(createMenuItem('Date Object','/script/three/c-34-date-object/date-object.html'));
    subPartThree.appendChild(createMenuItem('Dom','/script/three/c-35-dom/dom.html'));
    subPartThree.appendChild(createMenuItem('Query Slector','/script/three/c-36-query-selector/query-selector.html'));
    subPartThree.appendChild(createMenuItem('Onclick Event','/script/three/c-37-onclick-event/onclick.html'));
    subPartThree.appendChild(createMenuItem('Dom_Manipulation','/script/three/c-38-dom-manipulation/dom-manipulation.html'));
    subPartThree.appendChild(createMenuItem('Dom Traversing','/script/three/c-39-dom-traversing/dom-traversing.html'));
    subPartThree.appendChild(createMenuItem('Image Slider','/script/three/c-40-image-slider/image-slider.html'));
    
    partThree.appendChild(subPartThree);
    ul.appendChild(partThree);

    const partFour = createMenuItem('Four','#');
    //Create submenu for 'four'
    const subPartFour = document.createElement('ul');
    subPartFour.appendChild(createMenuItem('Add_Remove_Css','/script/four/c-41-add-remove-css/add-remove-css.html'));
    subPartFour.appendChild(createMenuItem('Event Listner','/script/four/c-42-event-listener/event-listener.html'));
    subPartFour.appendChild(createMenuItem('Event Listener Multi','/script/four/c-43-event-listner-multi/event-listener-multi.html'));
    subPartFour.appendChild(createMenuItem('Play Audio','/script/four/c-44-play-audio/play-audio.html'));
    subPartFour.appendChild(createMenuItem('Add Animation','/script/four/c-45-add-animation/add-animation.html'));
    subPartFour.appendChild(createMenuItem('Keypress Event','/script/four/c-46-keypress-event/keypress-event.html'));
    subPartFour.appendChild(createMenuItem('Dom Event Change','/script/four/c-47-dom-event-change/dom-event-change.html'));
    subPartFour.appendChild(createMenuItem('Dom Event Submit','/script/four/c-48-dom-event-submit/dom-event-submit.html'));
    subPartFour.appendChild(createMenuItem('Dom Media','/script/four/c-49-dom-event-media/dom-media-event.html'));
    subPartFour.appendChild(createMenuItem('Dom Scroll Load','/script/four/c-50-dom-event-scroll-load/dom-scroll-load.html'));

    partFour.appendChild(subPartFour);
    ul.appendChild(partFour);

    const partFive = createMenuItem('Five','#');

    //Create submenu for 'five'
    const subPartFive = document.createElement('ul');
    subPartFive.appendChild(createMenuItem('Dom Mouse','/script/five/c-51-dom-mouse-event/dom-mouse-event.html'));
    subPartFive.appendChild(createMenuItem('Dom Keyboard','/script/five/c-52-dom-keyboard-event/dom-keyboard-event.html'));
    subPartFive.appendChild(createMenuItem('Dom Focus','/script/five/c-53-dom-event-focus/dom-event-focus.html'));
    subPartFive.appendChild(createMenuItem('Dom_Clipboard','/script/five/c-54-dom-clipboard/dom-clipboard.html'));
    subPartFive.appendChild(createMenuItem('Dom Drag','/script/five/c-55-dom-drag-event/dom-drag-event.html'));
    subPartFive.appendChild(createMenuItem('Bom Location','/script/five/c-56-bom-location/bom-location.html'));
    subPartFive.appendChild(createMenuItem('Bom Popup Box','/script/five/c-57-bom-popup-box/bom-popup-box.html'));
    subPartFive.appendChild(createMenuItem('Bom Timing','/script/five/c-58-bom-timing/bom-timing.html'));
    subPartFive.appendChild(createMenuItem('Bom Clock','/script/five/c-59-bom-make-clock/bom-make-clock.html'));
    subPartFive.appendChild(createMenuItem('Best Practice','/script/five/c-60-best-practic/best-practic.html'));
 
    partFive.appendChild(subPartFive);
    ul.appendChild(partFive);

    //Creating Menu six
    const partSix = createMenuItem('Six');

//Creating Submenu for six
    var subPartSix = document.createElement('ul');
    subPartSix.appendChild(createMenuItem('Err Handle-1','/script/six/c-61-err-1/error1.html'));
    subPartSix.appendChild(createMenuItem('Err Handle-2','/script/six/c-62-err-2/err_handle-2.html'));
    subPartSix.appendChild(createMenuItem('Grafix Canvas','/script/six/c-63-Grafix-Canvas/grafix.html'));
    subPartSix.appendChild(createMenuItem('ES6 Veriable_Declear','/script/six/c-64-es6-veriable-declear/variable-function.html'));
    subPartSix.appendChild(createMenuItem('Hosting and Strict','/script/six/c-65-hoisting-and-strict/hoisting_strict.html'));
    subPartSix.appendChild(createMenuItem('Default_Rest_Peram','/script/six/c-66-default-parameter/drf.html'));
    subPartSix.appendChild(createMenuItem('Spread Operator','/script/six/c-67-spread-operator/spread-operator.html'));
    subPartSix.appendChild(createMenuItem('Hello','#'));
    subPartSix.appendChild(createMenuItem('Hello','#'));
    subPartSix.appendChild(createMenuItem('Hello','#'));
    //append six and submenu 
    partSix.appendChild(subPartSix);
    ul.appendChild(partSix);

    //Creating Others Menu 
    const others = createMenuItem('Others','#');

    //Creating Sub Menu Menu For Others 
    const other = document.createElement('ul')
    other.appendChild(createMenuItem('Digital Clock','/script/Others/Digital-Clock/clock.html'));
    other.appendChild(createMenuItem('Random Number','/script/Others/random/random.html'));
    other.appendChild(createMenuItem('Css Animation','/script/Others/css-amimation/css-animation.html'));
    const subOthers = other.appendChild(createMenuItem('Sub Others','#'));
    
    //Creating Sub Menu Menu For Other>Sub Other>ul menu item name 
    const subOther = document.createElement('ul');
    subOther.appendChild(createMenuItem('CV- Joynal','/page/cv-joynal/cv.html'));
    subOther.appendChild(createMenuItem('Sub Other2','#'));
    subOther.appendChild(createMenuItem('Sub Other3','#'));

    // Append ( subOther<subOthers<other<others<ul ) Check it ul/Last to 1st
  
    subOthers.appendChild(subOther);
    others.appendChild(other);
    ul.appendChild(others);

    // Append main menu to the header
    nav.appendChild(ul);
    dynamicHeader.appendChild(nav);
});

function createMenuItem(text, link) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = text;
    a.href = link || '#'; 
    li.appendChild(a);

    // if (text) {
    //     const submenu = document.createElement('ul');
    //     li.appendChild(submenu);
    // }

    return li;
}


//Footer Menu Start Here
document.addEventListener('DOMContentLoaded', function () {
    const dynamicFooter = document.getElementById('dynamicFooter');

    // Create footer elements
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    // Create footer menu items
    const homeItem = createMenuItem('Home', '/script/index.html');
    ul.appendChild(homeItem);

    const aboutItem = createMenuItem('About', '/page/about/about.html');
    ul.appendChild(aboutItem);

    const contactItem = createMenuItem('Contact', '/page/contact/contact.html');
    ul.appendChild(contactItem);

    // Append footer menu to the footer
    nav.appendChild(ul);
    dynamicFooter.appendChild(nav);
});

// function createMenuItem(text, link) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     a.textContent = text;
//     a.href = link || '#';
//     li.appendChild(a);

//     return li;
// }
