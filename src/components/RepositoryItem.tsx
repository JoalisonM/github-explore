interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
};

const RepositoryItem = (props: RepositoryItemProps) => {
  const { repository } = props;

  return (
    <li>
      <strong>{repository.name || 'Default'}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
};

export default RepositoryItem;