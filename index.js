const real_url = "/dataset/real-monet/real-monet-" + (Math.floor(Math.random() * 100)).toString() + ".jpg";
const wrong_url = "/dataset/ai-generated/" + (Math.floor(Math.random() * 100)).toString() + ".jpg";
const eles = ['correct', 'wrong']
const last_ele = eles[Math.floor(Math.random() * eles.length)];

document.getElementById('correct_img').src = real_url;
document.getElementById('wrong_img').src = wrong_url;

document.getElementById('wrong_img').onload = () => {
    document.getElementById('pics').style.display = 'flex';
}

document.getElementById(last_ele).classList.add('order-last');
