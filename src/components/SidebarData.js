import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
    {
        title: 'Accueil',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Infrastructure',
        path: '/infrastructure',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Plugins satelites',
        path: '/satelite-plugins',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Team Moodle',
        path: '/team-moodle',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Service utilisateur',
        path: '/users-service',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'LifeCycle - Plugins',
        path: '/plugin-lifecyle',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'LifeCycle - Moodle',
        path: '/moodle-lifecyle',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Processus Integral',
        path: '/integral-process',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]