
const GithubItem = (props) => {
  const { populorDetails } = props;
  const { id, name, issuesCount, forksCount, starsCount, avatarUrl } = populorDetails;
  return (
    <div>
      <img src={avatarUrl} alt={name} className="w-32 h-32" />
      <h2>{name}</h2>
      <p>Stars: {starsCount}</p>
      <p>Forks: {forksCount}</p>
      <p>Issues: {issuesCount}</p>
    </div>
  );
};


export default GithubItem;