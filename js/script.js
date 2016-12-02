var estadoquebrada = false;
	function mudaestado(estadodaluz) {
		if (!estadoquebrada) {
			document.getElementById("luz").src = "imagem/"+estadodaluz+".jpg";
			if (estadodaluz == 'lampada-quebrada') {
				estadoquebrada = true;
			}
		}
	}