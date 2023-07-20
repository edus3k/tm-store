import { useEffect, useState } from 'react';
import {
StyleSheet,
View,
Text,
Image
} from 'react-native';

import { Storage } from '@config/Firebase';
import { ref, listAll , getDownloadURL} from 'firebase/storage';

const Detach = ()=>{

    const [imageURLs, setImageURLs] = useState<string[]>([]);

    useEffect(() => {
        listImages();
    }, []);

    const listImages = async () => {
        try {
            const storage = Storage;
            const storageRef = ref(storage, 'store');
            const result = await listAll(storageRef)
      
            const imageURLs = await Promise.all(
              result.items.map(async (imageRef) => {
                const url = await getDownloadURL(imageRef);
                console.log(url);
                
                return url;
              })
            );

            // Faça algo com as URLs das imagens, como exibi-las em uma lista
            console.log(imageURLs);
            setImageURLs(imageURLs);

        } catch (error) {
            console.error('Erro ao listar imagens:', error);
        }
    };  


    return(
        <View>
            <Text>Store</Text>
            {imageURLs.map((url) => (<img key={url} src={url} alt="Imagem" style={{ width: 200, height: 200 }} />))}         
        </View>
    );
}

export default Detach;