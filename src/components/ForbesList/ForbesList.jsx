import { ForbesListItem } from 'components';
import PropTypes from 'prop-types';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list &&
          list.map(({ avatar, capital, id, isIncrease, name }) => (
            <ForbesListItem
              key={id}
              avatar={avatar}
              capital={capital}
              isIncrease={isIncrease}
              name={name}
            />
          ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};

ForbesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      capital: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      isIncrease: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
