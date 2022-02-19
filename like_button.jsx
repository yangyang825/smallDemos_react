class Life extends React.Component{
  render(){
    return(
      <div>
        <h2>
          React学不会怎么办?
        </h2>
        <button>
          不活了
        </button>
      </div>
    )
  }
}




// 'use strict';

// function LikeButton() {
//   const [liked, setLiked] = React.useState(false);

//   if (liked) {
//     return 'You liked this!';
//   }

//   return React.createElement(
//     'button',
//     {
//       onClick: () => setLiked(true),
//     },
//     'Like'
//   );
// }

const domContainer = document.getElementById('component-goes-here');
ReactDOM.render(React.createElement(LikeButton), domContainer);
