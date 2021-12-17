/* NAVBAR - GESTION RESPONSIVE */
	const hamburger = document.querySelector(".hamburger");
	const navMenu = document.querySelector(".nav-menu");
	const navAll = document.querySelector(".nav-all");
	const carteAccueil = document.getElementById("tternpa1");

	hamburger.addEventListener("click", mobileMenu);
	carteAccueil.addEventListener("click",activDrop2);

	function mobileMenu() {
		hamburger.classList.toggle("active");
		navAll.classList.toggle("active");
		document.getElementById("choix").classList.toggle("active");
		document.getElementById("choix").addEventListener("click", activDrop);
		document.getElementById("choiceDrop").classList.remove("actionner");
	}
	
	function activDrop(){
		document.getElementById("choiceDrop").classList.toggle("actionner");
	}
	
	function activDrop2(){
		document.getElementById("choixDrop").classList.toggle("actionner");
	}
	
/* CARROUSSEL (SLIDER) */

	let i = 0; // Slide actuelle
	let j = 3; // Slides totales
	
	function next(){//Bouton slide suivante
		document.getElementById("content" + (i+1)).classList.remove("active");//Ajout de la classe active sur Texte, Image et Div
		document.getElementById("produit" + (i+1)).classList.remove("active");
		document.getElementById("contenu" + (i+1)).classList.remove("active");

		i = ( j + i + 1) % j;
		document.getElementById("content" + (i+1)).classList.add("active");
		document.getElementById("produit" + (i+1)).classList.add("active");
		document.getElementById("contenu" + (i+1)).classList.add("active");
		
		indicator( i+ 1 );
	}
	

	function prev(){//Bouton slide précédente
		document.getElementById("content" + (i+1)).classList.remove("active");//Ajout de la classe active sur Texte, Image et Div
		document.getElementById("produit" + (i+1)).classList.remove("active");
		document.getElementById("contenu" + (i+1)).classList.remove("active");

		i = (j + i - 1) % j;
		document.getElementById("content" + (i+1)).classList.add("active");
		document.getElementById("produit" + (i+1)).classList.add("active");
		document.getElementById("contenu" + (i+1)).classList.add("active");

		indicator(i+1);
	}

/* APPARITION AU DEFILEMENT */

	const ratio = .6;
	const options = {
	  root: null,
	  rootMargin: '0px',
	  threshold: ratio
	}

	const handleIntersect = function (entries, observer){
		entries.forEach(function (entry) {
			if (entry.intersectionRatio > ratio) {
				entry.target.classList.add('reveal-visible')
				console.log('visible')
				observer.unobserve(entry.target)
			}
		})
	}


	const observer = new IntersectionObserver(handleIntersect, options);
	document.querySelectorAll('.reveal').forEach(function (r){
		observer.observe(r)
	})
	

	