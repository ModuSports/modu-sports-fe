import * as stylex from '@stylexjs/stylex';

export default function Home() {
  return <div {...stylex.props(style.home)}>Hello World</div>;
}

const style = stylex.create({
  home: {
    color: 'red',
    fontSize: '10px',
  },
});
