document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('fullscreen-btn');
    var body = document.body;
    var contentWindows = document.querySelector('.contentWindows');

    button.addEventListener('click', function() {
        if (body.requestFullscreen) {
            body.requestFullscreen();
        } else if (body.mozRequestFullScreen) { /* Firefox */
            body.mozRequestFullScreen();
        } else if (body.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            body.webkitRequestFullscreen();
        } else if (body.msRequestFullscreen) { /* IE/Edge */
            body.msRequestFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', function() {                
        setTimeout(function() {
            contentWindows.style.height = window.innerHeight + 'px';
        }, 100);
    });
});

function btnOnW() {
    document.getElementById("loadOn").style.display="flex";
    document.getElementById("sectionBtnOn").style.display="none";
    setTimeout(function(){
        document.getElementById("windowP").style.display="block"
        document.getElementById("loadOn").style.display="none"
    },2000)
}
function btnOffW(){
    document.getElementById("windowP").style.display="none";
    document.getElementById("loadOff").style.display="flex";
    setTimeout(function(){
        document.getElementById("loadOff").style.display="none";
        document.getElementById("sectionBtnOn").style.display="flex";
    },2000)
}


function linkedIn(){
    window.open("https://www.linkedin.com/in/anderson-esteban-rodriguez-cruz-19a276125/");
}
function gitHub(){
    window.open("https://github.com/3steban96");
}
function whatsapp(){
    window.open("https://wa.me/573012246095");
}
function btnOff() {
var ventana = window.open("", "_self");
    ventana.close();
}
function shell(){
    var display= document.getElementById("v1");
    var iconShell = document.getElementById("minimizedWindowsShell");
    iconShell.style.display="block";
    display.style.display = "block";
}
function projects(){
    var display= document.getElementById("v2");
    var iconProjects = document.getElementById("minimizedWindowsProjects");
    iconProjects.style.display="block";
    display.style.display = "block";

}
function curriculum(){
    var display= document.getElementById("v3");
    var iconProjects = document.getElementById("minimizedWindowsCV");
    iconProjects.style.display="block";
    display.style.display = "block";
}
function stackTech(){
    var display= document.getElementById("v4");
    var iconProjects = document.getElementById("minimizedWindowsST");
    iconProjects.style.display="block";
    display.style.display = "block";
}
function wDownloadMusic() {
    var windowDM = document.getElementById("downloadMusic");
    var windowCF = document.getElementById("convertFile");
    if (windowCF.style.display == "block") {
        windowCF.style.display = "none";
    }
    windowDM.style.display = "block";
}

function wConvertFile() {
    var windowCF = document.getElementById("convertFile");
    var windowDM = document.getElementById("downloadMusic");
    if (windowDM.style.display == "block") {
        windowDM.style.display = "none";
    }
    windowCF.style.display = "block";
}
document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector(".inputDownloadMusic");
    const img = document.querySelector(".imgMiniature");

    input.addEventListener("input", function() {
        const videoUrl = input.value.trim();
        if (videoUrl !== "") {
            fetch('https://backenddownloadmusic-1.onrender.com/getInformation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ urlMp4: videoUrl })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.thumbnail && data.thumbnail.url) {
                        img.src = data.thumbnail.url;
                    } else {
                        img.src = "ruta_de_la_miniatura_predeterminada.jpg";
                    }
                })
                .catch(error => {
                    console.error("Error al obtener la miniatura:", error);
                });
        } else {
            img.src = "";
        }
    });
});
function downloadMusicMP3() {
    const inputDWM = document.querySelector(".inputDownloadMusic").value;
    fetch('https://backenddownloadmusic-1.onrender.com/download', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ videoURL: inputDWM })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al descargar el archivo de audio');
        }
        return response.json(); // Ahora esperamos la respuesta como JSON
    })
    .then(data => {
        const { fileName, audioData } = data; // Obtenemos el nombre del archivo y los datos de audio del backend
        const url = 'data:audio/mp3;base64,' + audioData; // Creamos la URL de los datos de audio

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; // Asignamos el nombre del archivo proporcionado por el backend
        document.body.appendChild(a);
        a.click();
        a.remove();
    })
    .catch(error => {
        console.error('Error al descargar el archivo de audio:', error);
    });
};
function downloadVideo() {
    const inputDW = document.querySelector(".inputDownloadMusic").value;
    fetch('https://backenddownloadmusic-1.onrender.com/downloadMp4',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({urlMp4:inputDW})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al descargar el archivo');
        }
        return response.blob(); // Esperamos la respuesta como un blob
    })
    .then(blob => {
        const fileName = 'video.mp4'; // Supongamos que el nombre predeterminado del archivo es video.mp4
        const url = URL.createObjectURL(blob); // Creamos la URL del archivo

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; // Asignamos el nombre del archivo
        document.body.appendChild(a);
        a.click();
        a.remove();
    })
    .catch(error => {
        console.error('Error al descargar el archivo:', error);
    });
}




function mostrarNombreArchivos(input) {
    var lista = document.getElementById('listaArchivos');
    lista.innerHTML = ""; 
    if (input.files && input.files.length > 0) {
        for (var i = 0; i < input.files.length; i++) {
            var nombreArchivo = input.files[i].name;
            var listItem = document.createElement('li');
            listItem.textContent = nombreArchivo;
            lista.appendChild(listItem);
        }
    } else {
        var listItem = document.createElement('li');
        listItem.textContent = "No se ha seleccionado ningún archivo.";
        lista.appendChild(listItem);
    }
}

function enviarArchivosAlServidor() {
    var archivos = document.getElementById('fileInput').files;
    var formData = new FormData();

    for (var i = 0; i < archivos.length; i++) {
        formData.append('archivos', archivos[i]);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://convertfileb.onrender.com/convert-images', true);
    xhr.responseType = 'blob'; 
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Archivos convertidos correctamente.');
            var blob = xhr.response;
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'converted_files.zip';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } else {
            console.error('Error al convertir archivos.');
        }
    };
    xhr.send(formData);
}

function minimizarVentanaShell() {
    var minimizedWindowsShell = document.getElementById("minimizedWindowsShell");
    minimizedWindowsShell.style.display = "block";
    var window = document.getElementById("v1");
    window.style.display = "none";
}
function minimizarVentanaProjects() {
    var minimizedWindowsProjects = document.getElementById("minimizedWindowsProjects");
    minimizedWindowsProjects.style.display = "block";
    var window = document.getElementById("v2");
    window.style.display = "none";
}
function minimizarVentanaCV() {
    var minimizedWindowsCV = document.getElementById("minimizedWindowsCV");
    minimizedWindowsCV.style.display = "block";
    var window = document.getElementById("v3");
    window.style.display = "none";
}
function minimizarVentanaST() {
    var minimizedWindowsST = document.getElementById("minimizedWindowsST");
    minimizedWindowsST.style.display = "block";
    var window = document.getElementById("v4");
    window.style.display = "none";
}

function abrirVentanaShell() {
    var windowShell = document.getElementById("v1");
    windowShell.style.display = "block";
}
function abrirVentanaProjects() {
    var windowProjects = document.getElementById("v2");
    windowProjects.style.display = "block";
}
function abrirVentanaCV() {
    var windowCV = document.getElementById("v3");
    windowCV.style.display = "block";
}
function abrirVentanaST() {
    var windowCV = document.getElementById("v4");
    windowCV.style.display = "block";
}

function cerrarVentanaShell() {
    var window = document.getElementById("v1");
    window.style.display = "none";
    var iconShell = document.getElementById("minimizedWindowsShell")
    iconShell.style.display="none"
}
function cerrarVentanaProjects() {
    var windowProjects = document.getElementById("v2");
    windowProjects.style.display = "none";
    var iconProjects = document.getElementById("minimizedWindowsProjects")
    iconProjects.style.display="none"
}
function cerrarVentanaCV() {
    var windowCV = document.getElementById("v3");
    windowCV.style.display = "none";
    var iconCV = document.getElementById("minimizedWindowsCV")
    iconCV.style.display="none"
}
function cerrarVentanaST() {
    var windowST = document.getElementById("v4");
    windowST.style.display = "none";
    var iconST = document.getElementById("minimizedWindowsST")
    iconST.style.display="none"
}
function updateTime() {
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let day = timeNow.getDate();
    let month = timeNow.getMonth() + 1; 
    let year = timeNow.getFullYear();
    minutes = (minutes < 10 ? '0' : '') + minutes;
    let formattedTime = hours + ':' + minutes ;
    let formattedDate = day + '/' + month + '/' + year;
    document.getElementById('time').innerHTML = formattedTime + '<br/>' + formattedDate;
}
updateTime();
setInterval(updateTime,60000);
document.getElementById('commandForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    var inputValue = document.getElementById('commandInput').value.trim().toLowerCase();

    // Muestra el div correspondiente según el comando ingresado
    if (inputValue === 'cd c:\\users\\home\\proyectos') {
        document.getElementById('v2').style.display="block";
    } else if (inputValue === 'cd c:\\users\\home\\curriculum') {
        document.getElementById('v3').style.display="block";
    } else if (inputValue === 'cd c:\\users\\home\\tecnologias') {
        document.getElementById('v4').style.display="block";
    } else {
        var errorMessage = "El término '" + command + "' no se reconoce como nombre de un cmdlet, función, archivo de script o programa ejecutable. Compruebe si escribió correctamente el nombre o, si incluyó una ruta de acceso, compruebe que dicha ruta es correcta e inténtelo de nuevo.";
        displayError(errorMessage);
    }
    function displayError(message) {
    var errorContainer = $('<div></div>').addClass('error-message');
    errorContainer.append('<p>' + message + '</p>');
    outputContainer.html(errorContainer);
}

});