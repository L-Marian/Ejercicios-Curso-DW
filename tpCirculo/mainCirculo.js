/* 
-boton colores, problema, cuando cambia el color vuelve al centro (??? resolver)
-no pasarse de los limites del frame, deficiente, por el tamano del elemento
(podria mejorarse considerando las 4 posiciones o no sirve????)
-no duplicar el codigo, no logre que tome la funcion, not defined (??)
-modificar la posicion no es compatible con display flex?? no salio.
-el circulo pasa por encima de los botones. resolver (puede pasar x atras? orden de superposicion de las cajas)
-el intervalo, movimiento. pendiente.


*/
window.onload = function () {
	const buttonUp = document.querySelector('.button.up')  /* que pasa si clickeo en el contenido*/
	const buttonDown = document.querySelector('.button.down')	
	const buttonRight = document.querySelector('.button.right')
	const buttonLeft = document.querySelector('.button.left')
	const buttonRed = document.querySelector('.button.red')
	const buttonBlue = document.querySelector('.button.blue')
	const buttonGreen = document.querySelector('.button.green')
	const circle = document.querySelector('.circle')

	buttonRed.onclick = function () {

		circle.style = "background-color: #ff0000"
	}

	buttonBlue.onclick = function () {
		circle.style = "background-color: #0000ff"
	}

	buttonGreen.onclick = function () {
		circle.style = "background-color: #00ff00"
	}

	buttonDown.onclick = function goDown() {

		let positionY = circle.offsetTop

		if(positionY<500) {

			circle.style.top = positionY + 20

			positionY = positionY + 20
		}
	}

	
	buttonUp.onclick = function goUp() {

		let positionY = circle.offsetTop

		if(positionY>0){

			circle.style.top = positionY - 20

			positionY = positionY - 20
		}

	}

	buttonRight.onclick = function goRight () {

		let positionX = circle.offsetLeft

		if(positionX<930){

			circle.style.left = positionX + 20

			positionX = positionX + 20
		}

	}
	buttonLeft.onclick = function goLeft() {

		let positionX = circle.offsetLeft

		if(positionX>0){

			circle.style.left = positionX - 20

			positionX = positionX - 20
		}
	}

	document.onkeydown = function (event) {

		if (event.keyCode === 37) {

			let positionX = circle.offsetLeft

			if(positionX>0){

				circle.style.left = positionX - 20

				positionX = positionX - 20
			}		                      /*aca lo repeti pq no me salio */
		}
			
		if (event.keyCode === 39) {

			let positionX = circle.offsetLeft

			if(positionX<930) {

				circle.style.left = positionX + 20

				positionX = positionX + 20
			}
		}
			
		if (event.keyCode === 40) {
			
			let positionY = circle.offsetTop

			if(positionY<500) {

				circle.style.top = positionY + 20

				positionY = positionY + 20
			}
		}
			
		if (event.keyCode === 38) {
			
			let positionY = circle.offsetTop

			if(positionY>0) {

				circle.style.top = positionY - 20

				positionY = positionY - 20
			}
		}
	}
}