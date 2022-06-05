function ReceiveHistory(){
	return document.getElementById("history-num").innerText;
}
function DisplayHistory(Num){
	document.getElementById("history-num").innerText=Num;
}
function ReceiveOutput(){
	return document.getElementById("output-num").innerText;
}
function DisplayOutput(Num){
	if(Num==""){
		document.getElementById("output-num").innerText=Num;
	}
	else{
		document.getElementById("output-num").innerText=getNumberFormat(Num);
	}	
}
function getNumberFormat(Num){
	if(Num=="-"){
		return "";
	}
	var a = Number(Num);
	var value = a.toLocaleString("en");
	return value;
}
function AlterNumberFormat(Num){
	return Number(Num.replace(/,/g,''));
}
var opert = document.getElementsByClassName("opert");
for(var x =0;x<opert.length;x++){
	opert[x].addEventListener('click',function(){
		if(this.id=="clear"){
			DisplayHistory("");
			DisplayOutput("");
		}
		else if(this.id=="backspace"){
			var output=AlterNumberFormat(ReceiveOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				DisplayOutput(output);
			}
		}
		else{
			var output=ReceiveOutput();
			var NumberHistry=ReceiveHistory();
			if(output==""&&NumberHistry!=""){
				if(isNaN(NumberHistry[NumberHistryry.length-1])){
					NumberHistry= NumberHistry.substr(0,NumberHistry.length-1);
				}
			}
			if(output!="" || NumberHistry!=""){
				output= output==""?output:AlterNumberFormat(output);
				NumberHistry=NumberHistry+output;
				if(this.id=="="){
					var result=eval(NumberHistry);
					DisplayOutput(result);
					DisplayHistory("");
				}
				else{
					NumberHistry=NumberHistry+this.id;
					DisplayHistory(NumberHistry);
					DisplayOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var x =0;x<number.length;x++){
	number[x].addEventListener('click',function(){
		var output=AlterNumberFormat(ReceiveOutput());
		if(output!=NaN){ 
			output=output+this.id;
			DisplayOutput(output);
		}
	});
}