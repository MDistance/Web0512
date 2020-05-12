import {Touchscroll} from './touchscroll';

document.documentElement.addEventListener('touchstart', function(e){
    e.preventDefault();
}, {
    passive: false
});

//实例化
new Touchscroll('#outer', '#inner');