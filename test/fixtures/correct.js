// `jasmine`, `jest` and `mocha` envs.
/* eslint-disable prettier/prettier */

const React = null;

// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// `react-hooks/rules-of-hooks`.
const useEffect = noop;

const RulesOfHooks = () => {
  useEffect(noop);

  return null;
};

noop(RulesOfHooks);

// `react/jsx-tag-spacing`.


const TagSpacing = () => (
  <div />
);

noop(TagSpacing);

// `react/prefer-stateless-function`.
class PreferStatelessFunction extends React.Component {
  getFoo = () => {
    return 'foo';
  }

  render() {
    return this.getFoo();
  }
}

noop(PreferStatelessFunction);
