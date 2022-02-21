const nftImg = document.querySelector('.nft-img');
const overlay = document.querySelector('.view-overlay');

nftImg.addEventListener('mouseover', function() {
    overlay.style.visibility = 'visible';
});

nftImg.addEventListener('mouseout', function() {
    overlay.style.visibility = 'hidden';
});
