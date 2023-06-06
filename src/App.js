// 1
import React, { Component } from 'react';

class ExampleComponent extends Component {
  componentDidMount() {
    console.log('Компонент смонтирован');
  }

  render() {
    return <div>Пример компонента</div>;
  }
}

export default ExampleComponent;


// 2
// import React, { Component } from 'react';

// class ExampleComponent extends Component {
//   componentWillUnmount() {
//     console.log('Компонент будет размонтирован');
//   }

//   render() {
//     return <div>Пример компонента</div>;
//   }
// }

// export default ExampleComponent;
