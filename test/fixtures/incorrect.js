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

// `react/jsx-tag-spacing`.
const React = null;

const TagSpacingAfterOpening = () => (
  < div />
);

noop(TagSpacingAfterOpening);

const TagSpacingBeforeClosing = () => (
  <div>
    {'foo'}
  </div >
);

noop(TagSpacingBeforeClosing);

const TagSpacingBeforeSelfClosing = () => (
  <div/>
);

noop(TagSpacingBeforeSelfClosing);

const TagSpacingClosingSlash = () => (
  <div/ >
);

noop(TagSpacingClosingSlash);

// `react/prefer-stateless-function`.
class PreferStatelessFunction extends React.Component {
  render() {
    return null;
  }
}

noop(PreferStatelessFunction);
