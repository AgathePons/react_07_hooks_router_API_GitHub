// == Import
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

// == Composant
function Messages({ counter }) {
  return (
    <Segment>
      <p>
        La recherche a donné {counter} résultat{counter > 1 && 's'}
      </p>
    </Segment>
  );
}

Messages.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Messages;