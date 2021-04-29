import {RepositoryItem} from '../components/RepositoryItem';

const repository = {
    name: 'Exemplo',
    description: 'repositório para lidar com formulários',
    link: 'http://'  
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>

            </ul>
        </section>
    )
}