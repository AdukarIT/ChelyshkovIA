addEventListener('DOMContentLoaded', () => {
	//--3
	let findColorRE = /^\#((([0-9]|[a-f]){3})|(([0-9]|[a-f]){6}))$/;
	console.log(findColorRE.test('#ffd10f'));

	//--5
	let form             = document.querySelector('.form');
	let labelEmail       = document.querySelector('.label--email');
	let labelPw1         = document.querySelector('.label--pw1');
	let labelPw2         = document.querySelector('.label--pw2');
	let email            = document.querySelector('.input--email');
	let pw1              = document.querySelector('.input--pw1');
	let pw2        	     = document.querySelector('.input--pw2');
	let submitReg        = document.querySelector('#submitReg');
	let validEmailRegExp = /.+@.+\..+/i; 
	let isValidatePsw    = false;
	let isValidateEmail  = false;
	let isSimplePsw      = false;


	function formValidation(event) {
		if(! (isValidateEmail && isValidatePsw && isSimplePsw)){
			event.preventDefault();
		}else{
			alert('Вы успешно зарегистрированы!');
		}
	}


	pw1.addEventListener('input', () => {
		if(
			!(
				/[\d]/.test(pw1.value) && 
				/[^\d\w]/.test(pw1.value) && 
				/[\W]/.test(pw1.value) && 
				/.{7,}/.test(pw1.value)
			)
		){
			pw1.classList.add('not-valid');
			pw1.classList.remove('valid');
			if(document.querySelector('.pwsrd-warning') == null){
				let psWarning = document.createElement('div');
				psWarning.className = 'pwsrd-warning';
				psWarning.append('Use symbols, digits and special symbols (more then 6)');
				labelPw1.after(psWarning);
			}
		}else{
			pw1.classList.remove('not-valid');
			pw1.classList.add('valid');
			isValidatePsw = true;
			if(document.querySelector('.pwsrd-warning') != null){
				document.querySelector('.pwsrd-warning').remove();
			}
		}
	});

	email.addEventListener('input', () => {
		if(!validEmailRegExp.test(email.value)){
			email.classList.add('not-valid');
			email.classList.remove('valid');
			if(document.querySelector('.email-warning') == null){
				let emailWarning = document.createElement('div');
				emailWarning.className = 'email-warning';
				emailWarning.append('Your e-mail address not valid! Please use ----@---.--- format!');
				labelEmail.after(emailWarning);
			}
		}else{
			email.classList.remove('not-valid');
			email.classList.add('valid');
			isValidateEmail = true;
			if(document.querySelector('.email-warning') != null){
				document.querySelector('.email-warning').remove();
			}
		}
	});

	pw2.addEventListener('input', () => {
		if(pw1.value != pw2.value){
			pw2.classList.remove('valid');
			pw2.classList.add('not-valid');
			isSimplePsw = false;
		}else{
			isSimplePsw = true;
			pw2.classList.add('valid');
			pw2.classList.remove('not-valid');
		}
	});
	

	submitReg.addEventListener('click', formValidation);
});