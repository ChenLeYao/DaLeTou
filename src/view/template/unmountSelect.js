export default function  unMountSelect() {
    let selectBox = document.querySelectorAll('.mobileSelect');
    selectBox = [].slice.call( selectBox );
    for ( let i =0 ; i< selectBox.length ; i++){
        document.body.removeChild(selectBox[i]);
    }
}
