-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `portfolio_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `client`
--

INSERT INTO `client` (`id`, `name`) VALUES
(1, 'Wild Code School'),
(2, 'Shop Around Me');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- --------------------------------------------------------

--
-- Structure de la table `project`
--

CREATE TABLE `project` (
  `id` int(11) PRIMARY KEY NOT NULL,
  `name` varchar(80) NOT NULL,
  `description` varchar(280) NOT NULL,
  `start_date` varchar(80) NOT NULL,
  `end_date` varchar(80) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `developer_team` varchar(80) NOT NULL,
  `linkedin_post_link` varchar(255),
  `github_repo_link` varchar(255),
  `client_id` int(11),
      FOREIGN KEY (client_id)
      REFERENCES client(id)
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project`
--

INSERT INTO `project` (`id`, `name`, `description`, `start_date`, `end_date`, `img_url`, `developer_team`, `linkedin_post_link`, `github_repo_link`, `client_id`) VALUES
(1, 'Project 1', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus distinctio odit ipsa cum rerum a sapiente obcaecati itaque natus magnam?', '28-02-2022', '29-07-2022', 'https://loremflickr.com/320/240', 'Developer team 1', 'https://www.linkedin.com/in/simon-duc-858481213/', 'https://github.com/Simon-Duc/1st_portfolio_project', 1),
(2, 'Project 2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus distinctio odit ipsa cum rerum a sapiente obcaecati itaque natus magnam?', '01-05-2022', '15-06-2022', 'https://loremflickr.com/320/240', 'Developer team 2', 'https://www.linkedin.com/in/simon-duc-858481213/', 'https://github.com/Simon-Duc/1st_portfolio_project', 2),
(3, 'Project 3', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus distinctio odit ipsa cum rerum a sapiente obcaecati itaque natus magnam?', '01-05-2022', '15-06-2022', 'https://loremflickr.com/320/240', 'Developer team 2', 'https://www.linkedin.com/in/simon-duc-858481213/', 'https://github.com/Simon-Duc/1st_portfolio_project', 1);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- --------------------------------------------------------

--
-- Structure de la table `tool`
--

CREATE TABLE `tool` (
  `id` int(11) UNSIGNED NOT NULL,
  `name` varchar(80) NOT NULL,
  `img_url` varchar(255),
  `category` varchar(80)
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `tool`
--

INSERT INTO `tool` (`id`, `name`, `img_url`, `category`) VALUES
(1, 'HTML', 'https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg', 'markup language'),
(2, 'CSS', 'https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg', 'style sheet language'),
(3, 'Tailwind', 'https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg', 'style sheet language'),
(4, 'JavaScript', 'https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg', 'programming language'),
(5, 'React.js', 'https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg', 'library'),
(6, 'Node.js', 'https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg', 'framework'),
(7, 'Express.js', 'https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg', 'framework'),
(8, 'Python', 'https://github.com/devicons/devicon/blob/master/icons/python/python-original.svg', 'programming language'),
(9, 'MySQL', 'https://github.com/devicons/devicon/blob/master/icons/mysql/mysql-original.svg', 'relational database management system'),
(10, 'Git', 'https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg', 'version control software');


--
-- Index pour les tables exportées
--

--
-- Index pour la table `tool`
--
ALTER TABLE `tool`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `tool`
--
ALTER TABLE `tool`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- --------------------------------------------------------

--
-- Structure de la table `project_tool`
--

CREATE TABLE `project_tool` (
  `project_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_project_tool_project
        FOREIGN KEY (project_id)
        REFERENCES project(id)
        ON DELETE CASCADE,
  `tool_id` int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_project_tool_tool
        FOREIGN KEY (tool_id)
        REFERENCES tool(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `project_tool`
--

INSERT INTO `project_tool` (`project_id`,`tool_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 4),
(2, 1) ,
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5);

