/**
 * Created by Irving on 16/2/2.
 */
//==值比较  ===类型比较
function $(id){
    return typeof id === 'string'? document.getElementById(id):id;
}

window.onload= function(){
    //拿到所有的 li标签（标题）和 li对应的内容div
     var titles = $('tab-header').getElementsByTagName('li');
    var divs = $('tab-content').getElementsByTagName('div');
    //   判断
    if(titles.length != divs.length) return;

    for(var i=0 ; i<titles.length; i++){
        var li = titles[i];
        li.id = i;

        li.onmousemove = function(){
            for(var j=0 ; j<titles.length;j++){
                  //class的名字为空，取消原来定义的class='select'
                  titles[j].className = '';
                    divs[j].style.display='none'
            }
            //让当前的被选中
            this.className='select';
            divs[this.id].style.display='block';

        }


    }
}