import React from 'react';
import { Media, Button } from 'reactstrap';

const Example = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object src="https://www.tacobell.com/medias/CLS-NotSure-Groups.jpg?context=bWFzdGVyfHJvb3R8NTI3NjZ8aW1hZ2UvanBlZ3xoNWIvaGYyLzg4MDY3NjM3MjQ4MzAuanBnfDc4YTNhMzI1ZTcwNGVhMWRiNzlkMGQxOTcwNWMxMjI5ZjRjMDIwZmM4NDEwNGQwYjdiMzI4M2ZhNDg5YTc5MTY" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Taco Bell
        </Media>
        $ 1.2 miles away
        <Button>Directions</Button>
        <Button>Favorite</Button>
      </Media>
    </Media>
  );
};

export default Example;