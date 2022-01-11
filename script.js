function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('(ERRO) Ano errado, digite o ano novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade < 11) {
                    img.setAttribute('src', 'irmaodojorel.png') 
                    res.style.textAlign = 'center' 
                    res.innerHTML = `Você é um menino de ${idade} anos.`
                    document.body.style.background = '#40b5eb'

                } else if (idade < 21) {
                    img.setAttribute('src', 'adolecentemenino.png') 
                    res.style.textAlign = 'center' 
                    res.innerHTML = `Você é um jovem de ${idade} anos.`
                    document.body.style.background = '#869fca'

                } else if (idade < 50) {
                    img.setAttribute('src', 'homer1.png') 
                    res.style.textAlign = 'center' 
                    res.innerHTML = `Você é um homem de ${idade} anos.`
                    document.body.style.background = '#476495'
                } else {
                    img.setAttribute('src', 'vovo2.png') 
                    res.style.textAlign = 'center' 
                    res.innerHTML = `Você é um idoso de ${idade} anos.`
                    document.body.style.background = '#494a95'
                    
                }
         } else if (fsex[1].checked) {
            genero = 'Mulher'
                if (idade < 11) {
                    img.setAttribute('src', 'lisa.png') 
                    res.style.textAlign = 'center' 
                    res.innerHTML = `Você é uma menina de ${idade} anos.`
                    document.body.style.background = '#c485b6'
                    
                } else if (idade < 21) {
                    img.setAttribute('src', 'sakura.png') 
                    res.style.textAlign = 'center' 
                    res.innerHTML = `Você é uma jovem de ${idade} anos.`
                    document.body.style.background = '#c46bb0'
                } else if (idade < 50) {
                    img.setAttribute('src', 'marge.png') 
                    res.style.textAlign = 'center' 
                    res.innerHTML = `Você é uma Mulher de ${idade} anos.`
                    document.body.style.background = '#c34ea8'
                } else {
                    img.setAttribute('src', 'vovojuju.png') 
                    res.style.textAlign = 'center' 
                    res.innerHTML = `Você é uma idosa de ${idade} anos.`
                    document.body.style.background = '#892973'
                }
         } else if (fsex[2].checked) {
            genero = 'Outro'
            if (idade < 11) {
                img.setAttribute('src', 'rainha.png') 
                res.style.textAlign = 'center' 
                res.innerHTML = `Você é uma criança de ${idade} anos.`
                document.body.style.background = '#c485b6'
                ref.innerHTML = `Se não pegou a referência, assista: Aventura Lego 2`
                
            } else if (idade < 21) {
                img.setAttribute('src', 'rainha.png') 
                res.style.textAlign = 'center' 
                res.innerHTML = `Você é um/uma jovem de ${idade} anos.`
                document.body.style.background = '#c485b6'
                ref.innerHTML = `Se não pegou a referência, assista: Aventura Lego 2`
                
            } else if (idade < 50) {
                img.setAttribute('src', 'rainha.png') 
                res.style.textAlign = 'center' 
                res.innerHTML = `Você é um adulto de ${idade} anos.`
                document.body.style.background = '#c485b6'
                ref.innerHTML = `Se não pegou a referência, assista: Aventura Lego 2`
            } else {
                img.setAttribute('src', 'rainha.png') 
                res.style.textAlign = 'center' 
                res.innerHTML = `Você é idoso/a de ${idade} anos.`
                document.body.style.background = '#c485b6'
                ref.innerHTML = `Se não pegou a referência, assista: Aventura Lego 2`
            }
        }
       
                     
        res.appendChild(img)
        
    
    }
}
