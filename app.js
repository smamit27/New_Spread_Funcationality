//public valiable
const rowItem = 5,deleteItem = 'delete', list = document.getElementById('news__list'),ListCount = list.childNodes.length;
const addNewsToList = (...args) => {
    const obj = { name: args[0],surname: args[1],email: args[2]};
    if(list.childNodes.length >= rowItem) {
        document.getElementById('news__inline').classList.add("news_hidden");
        document.getElementById('news__hide-message').classList.remove("news_hidden");  
      } else {
          if(list.childNodes.length <= rowItem){
              const row = document.createElement('div');
              row.innerHTML = `<div class="news__inline-list"><label for="news-list-name" class="news__inline-label">Name</label><input type="text"  name="news-name" value= "${obj.name}" /></div><div class="news__inline-list"><label for="news-surname" class="news__inline-label">Surname</label><input type="text" name="news-surname" value= "${obj.surname}" /></div><div class="news__inline-list"><label for="news-email" class="news__inline-label">Email address </label><input type="text"  name="news-email" value= "${obj.email}" /> </div><div class="news__inline-list news__remove"  onclick="deleteNewsList(this)" id="delete"><i class="fa fa-trash " ></i> Remove</div>`
           list.appendChild(row);
          }
      }
      clearNewsField();
  }
// Deleter Items
const deleteNewsList = (value) => {
    if(ListCount <= rowItem) {
        document.getElementById('news__inline').classList.remove("news_hidden");
        document.getElementById('news__hide-message').classList.add("news_hidden");
    } 
    if (value.id === deleteItem) value.parentElement.remove();
  }
//Clear Fields
const clearNewsField = () => {
        document.getElementById('name').value = '';
        document.getElementById('surname').value = '';
        document.getElementById('email').value = '';
    }
//Send Input Data
const sendNewsList = (...args) => {
    console.log(list);
    let newsList = [];
      let newsListObj = {
          'name': args[0],
          'surname': args[1],
          'email': args[2]
      }
      newsList.push(newsListObj);
      console.log(newsListObj);
      clearNewsField();
  }


