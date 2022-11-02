import './home.style.css'

export default function Home() {
  return (

   
    <div className="home">

      <div id="profile">
        <img src="/assets/person1.jpg" alt="profileImg" id="profile__Img" />
        <div id="profileName">Victor Balogun</div>
        <a href="https://twitter.com/blvckaddiict" target="_blank" rel='noopener noreferrer' id='btn__zuri'>Twitter</a>
        {/* <a href="victorbalogun.slack.com" target="_blank" rel='noopener noreferrer' id='slack'>Slack</a> */ }
      </div>

      <div id="links">
          <a href="https://training.zuri.team/" target="_blank" rel='noopener noreferrer' id='btn__zuri'>Zuri</a>
          <a href="http://books.zuri.team " target="_blank" rel='noopener noreferrer' id='books'>Zuri Books</a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=victorbalogun" target="_blank" rel='noopener noreferrer' id='book__python'>Python Books</a>
          <a href="https://background.zuri.team" target="_blank" rel='noopener noreferrer' id='Background check for codes'>Pitch</a>
          <a href="https://books.zuri.team/design-rules"  target="_blank" rel='noopener noreferrer' id='book__design'>Design Books</a>
      </div>`
     </div> 
  )
}
