function ContactButtons(object){

    let li=document.createElement('li');
    let a=document.createElement('a');
    let i=document.createElement('i');

    li.className='button__option';
    li.id=object['name'];
    li.style.backgroundColor=object['color'];

    a.href=object['link'];
    
    i.className=`fa-brands fa-${object['name']} fa-2xl`;

    a.append(i);
    li.append(a);
    $('#contacts__buttons').append(li)
}

$(document).ready(()=>{
    $('#contacts__buttons').ready(()=>{
        fetch('dataset/contacts.json').then((item)=>item.json()).then((item)=>{
            item['contacts'].forEach((item) => {
                ContactButtons(item);
            });
        })
    })
})