export default ({ level, maxLives, lives, time }) => `
<header class="container">
  <div class="row bg-light text-center test__class">
    <div class="col">Level: ${ level }</div>
    <div class="col">
    Lives:
      ${new Array(lives).fill('<i class="fas fa-heart"></i>').join('')} 
      ${new Array(maxLives - lives).fill('<i class="far fa-heart"></i>').join('')} 
    </div>
    <div class="col">Time: ${ time }</div>
  </div>
</header>`