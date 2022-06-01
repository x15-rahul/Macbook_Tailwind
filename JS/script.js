document.getElementById('8gb-ram').addEventListener('click', function(){
    const extraMemory = document.getElementById('extra-memory');
    extraMemory.innerText = '0';
})

document.getElementById('16gb-ram').addEventListener('click', function(){
    const extraMemory = document.getElementById('extra-memory');
    extraMemory.innerText = '75';
})

document.getElementById('256gb-ssd').addEventListener('click', function(){
    const extraStorage = document.getElementById('extra-storage');
    extraStorage.innerText = '0';
})

document.getElementById('500gb-ssd').addEventListener('click', function(){
    const extraStorage = document.getElementById('extra-storage');
    extraStorage.innerText = '50';
})

document.getElementById('1tb-ssd').addEventListener('click', function(){
    const extraStorage = document.getElementById('extra-storage');
    extraStorage.innerText = '100';
})

document.getElementById('regular-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = '0';
})
document.getElementById('urgent-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = '20';
})

function getOverallPrice(){
    
}