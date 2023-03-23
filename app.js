function calculateBmi() {
	//a,bil value weight & height
	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;
	// hitung BMI
	if(weight > 0 && height > 0){	
		var bmi1 = weight/(height/100*height/100)
		//pembulatan
		var bmi = Math.round(bmi1);
		document.getElementById('bmi').value = bmi;
		
		if(bmi < 18.5){
			document.getElementById('result').value = "Kekurangan berat badan";
			document.getElementById('resultkatakata').value = "Anda memiliki kekurangan berat badan";
		}
		if(bmi > 18.5 && bmi < 24.9){
			document.getElementById('result').value = "Normal(Ideal)";
			document.getElementById('resultkatakata').value = "Anda memiliki berat badan ideal";
		}
		if(bmi > 25 && bmi < 29.9){
			document.getElementById('result').value = "Kelebihan berat badan";
			document.getElementById('resultkatakata').value = "Anda memiliki berat badan berlebih";
		}
		if(bmi >= 29.9){
			document.getElementById('result').value = "Kegemukan (Obesitas)";
			document.getElementById('resultkatakata').value = "Anda Kegemukan (Obesitas)";
		
	}
	
}}