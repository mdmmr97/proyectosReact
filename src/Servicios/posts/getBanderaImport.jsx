import ES from '../../assets/imgIdioma/flag-for-flag-spain-svgrepo-com.svg';
import EN from '../../assets/imgIdioma/united-kingdom-uk-svgrepo-com.svg';
import FR from '../../assets/imgIdioma/france.svg';
import DE from '../../assets/imgIdioma/germany.svg';
import IT from '../../assets/imgIdioma/italy.svg';
import AR from '../../assets/imgIdioma/morocco.svg';
import PO from '../../assets/imgIdioma/portugal.svg';
import RU from '../../assets/imgIdioma/russia.svg';
import SB from '../../assets/imgIdioma/sinbandera.svg';

export function getBanderaImport (id) {
    switch (id) {
        case 'ES': return ES;
        case 'EN': return EN;
        case 'FR': return FR;
        case 'DE': return DE;
        case 'IT': return IT;
        case 'AR': return AR;
        case 'PO': return PO;
        case 'RU': return RU;
        default: return SB;
    }
}
