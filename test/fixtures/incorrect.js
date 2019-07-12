/* eslint-disable prettier/prettier */

const React = null;

// Avoid extra `no-unused-vars` violations.
function noop() {
  // Do nothing
}

// `react-hooks/rules-of-hooks`.
const useEffect = noop;

const RulesOfHooks = () => {
  if (Math.random() > 0.5) {
    useEffect(noop);
  }

  return null;
};

noop(RulesOfHooks);

// `react/prefer-stateless-function`.
class PreferStatelessFunction extends React.Component {
  render() {
    return null;
  }
}

noop(PreferStatelessFunction);
