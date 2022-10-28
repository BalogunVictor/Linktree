import './home.style.css'

export default function Home() {
  return (

   
    <div className="home">

      <div id="profile">
        <img src="/assets/person1.jpg" alt="profileImg" id="profile__Img" />
        <div id="profileName">Victor Balogun</div>
        <a href="https://training.zuri.team/" target="_blank" rel='noopener noreferrer' id='btn__zuri'>Twitter</a>
         
      </div>

      <div id="links">
          <a href="https://training.zuri.team/" target="_blank" rel='noopener noreferrer' id='btn__zuri'>Zuri</a>
          <a href="http://books.zuri.team " target="_blank" rel='noopener noreferrer' id='books'>Books</a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=victorbalogun" target="_blank" rel='noopener noreferrer' id='book__python'>Book Python</a>
          <a href="https://background.zuri.team," target="_blank" rel='noopener noreferrer' id='pitch'>Pitch</a>
          <a href="https://books.zuri.team/design-rules"  target="_blank" rel='noopener noreferrer' id='book__design'>Book Design</a>
      </div>`
     </div> 
  )
}
