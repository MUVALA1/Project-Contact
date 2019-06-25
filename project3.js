
var contacts=[];//array for contacts

function Contact(firstname,secondname,phone,email,address){
	this.firstname=firstname;
	this.secondname=secondname;
	this.phone=phone;
	this.email=email;
	this.address=address;
};// creates a contact object

var saveContact=()=>{
	var firstname=document.querySelector('[name="firstname"]').value;
	var secondname=document.querySelector('[name="secondname"]').value;
	var phone=document.querySelector('[name="phone"]').value;
	var email=document.querySelector('[name="email"]').value;
	var address=document.querySelector('[name="address"]').value;
	var Field= new Contact(firstname,secondname,phone,email,address);
	contacts.push(Field);
	console.log('saved');
};//giving the submit button a function so that it saves to contact array

var searchContacts=()=>{
	var phrase=document.getElementById('sphrase').value;
	var query=phrase.document.getElementByName("firstname");
	for (var i = 0;i<contacts.length;i++ ) {
		 var name=conatcts[i].getElementByName("firstname")[0];
		 if(name.innerHTML().indexOf(phrase)){
		 	contacts[i].style.display="";
		 };else{
		 	contacts[i].style.display="none";
		 }; 
	};
};	