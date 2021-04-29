interface RepositoryItemProps{
  repository:{
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
  }
}

import '../styles/repositoryitem.scss';

export function RepositoryItem(props: RepositoryItemProps){
    return(
        <li>
          <div className="contentContainer">
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}>
              Acessar Repositório
            </a>
          </div>
          <div className="starsContainer">
            <p>{props.repository.stargazers_count} <strong>stars</strong></p>
          </div>
        </li>
    );
}