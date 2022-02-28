// ------------------------------------------------------------------// Document Object Model /------------------------------------------

//  the dom is whole html document , when html load in browser it become document object

// window.document  


// -------------------------------------------------------------- METHODS ---------------------------------------------

// 1. write("string") :- writes the given string on the doucment.

// function printvalue(){
//     var name = document.form1.name.value;
//     alert('welcome Mr.' +name)
// }


// 2. document.getElementById() :- to fetch element by id

// const getsqure=()=>{
//     var name = document.getElementsByClassName('para')
//    alert('ganpat koli', +name)
// }

// 3. document.getElementsByName() - to fetch element by class name 

// const getsqure=()=>{
// var num = document.getElementsByClassName('show').value;
// alert('the squre of the no are'  +num * num)
// }


// 4. 3. document.getElementsByName() 






// Dom Navigaet


// 1: document.documentElement
      // returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
  // list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length

// 👉 Practice Time 
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()

// 👉 Practice Time 
// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// 👉 How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling


