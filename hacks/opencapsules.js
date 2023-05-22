let unlocks = {
    "Uncommon": {},
    "Rare": {},
    "Epic": {},
    "Legendary": {},
    "Chroma": {},
    "Mystical": {}
}

let unique = 'NONE'
let stop = false
let opened = 0

let packs = await fetch('/data/trians', { headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' } }).then(x => {return x.json()})

packOptions = await packs.ValuesnCapsules.map(x => x.name)

let pack = prompt(`What pack do you want to open? These are the following options: ${packOptions.join(', ')}`)
if (!packOptions.includes(pack)) {
    alert('This is not a valid capsule. Currently, this is case sensitive (Will change in the future)')
} else {
    el = document.createElement('div')
el.style.position = 'absolute'
el.style.top = '10px'
el.style.right = '10px'
el.style.height = 'fit-content'
el.style.width = '250px'
el.style.padding = '18px'
el.style.background = '#d1d1d1'
el.style.border = '2px solid rgba(0,0,0,0.6)'
el.style.borderRadius = '15px'
el.style.zIndex = '1000'
el.classList.add('triangulet-hack-box')
el.style.display = 'flex'
el.style.flexDirection = 'column'
el.style.boxShadow = '0px 0px 11px 0px rgba(0,0,0,0.75)'
document.querySelector('body').appendChild(el)

function run() {
    if (stop) {
        stop = false
        document.querySelector('.openerStop').innerHTML = 'Stop Opener'
    }
    else {
        stop = true
        document.querySelector('.openerStop').innerHTML = 'Start Opener'
    }
}



setInterval(() => {
    if (!stop) {
        fetch('/api/open', { method: 'POST', headers: { 'Accept': 'application/json', 'authorization': triangulet.tokenraw, 'Content-Type': 'application/json' }, body: JSON.stringify({ "capsule": pack })}).then(x => x.json()).then(response => {
                if (response.new) unique = response.trian
                if (unlocks[response.rarity][response.trian]) unlocks[response.rarity][response.trian] ++
                else unlocks[response.rarity][response.trian] = 1
                opened ++
                document.querySelector('.triangulet-hack-box').innerHTML = ''
                document.querySelector('.triangulet-hack-box').innerHTML += `<h3 style="margin: 10px">${response.rarity} ${response.trian} (${unlocks[response.rarity][response.trian].toLocaleString()}x)</h3>`
                document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0px">Coded by <a href="https://github.com/Piotr1178/Triangulet">Piotr</a>`
                document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0px">RECENT UNIQUE: ${unique}</p>`
                document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0px">CAPSULES OPENED: ${opened.toLocaleString()}</p>`
                document.querySelector('.triangulet-hack-box').innerHTML += `<button type="button" class="openerStop" style="background-color: #039162; color: white; padding: 9px; border-radius: 8px; height: fit-content; width: fit-content; font-size: 15px; font-family: Nunito; border: none; box-shadow: 0px 7px 0px 0px #01744e; cursor: pointer; transition: .3s ease; margin: 9px;" onclick="run()">Stop Opener</button>`
                document.querySelector('.triangulet-hack-box').innerHTML += '<h2 style="margin: 3px; text-decoration: underline">Logs</h2>'
                Object.keys(unlocks).forEach(rarity => {
                    document.querySelector('.triangulet-hack-box').innerHTML += `<h3 style="margin: 3px">${rarity}</h3>`
                    Object.keys(unlocks[rarity]).forEach(ul => {
                        document.querySelector('.triangulet-hack-box').innerHTML += `<p style="margin: 0">${ul}: ${unlocks[rarity][ul].toLocaleString()}x</p>`
                    })
                })
            })
        }
    }, 1150)
}



// Thanks for supporting me and my hacks: https://discord.gg/SvEhNNJWB2
console.log('%cThank you for using my hacks! 👍', 'font-size: 25px')
console.log('%cYou can find more hacks by Piotr using the link below:', 'font-size: 15px')
console.log('%chttps://github.com/Piotr1178/Triangulet/tree/main/hacks', 'font-size: 18px')
console.log('%chttps://discord.gg/SvEhNNJWB2', 'font-size: 13px')
