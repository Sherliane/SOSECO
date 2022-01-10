import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, View, Text, statusbar, Dimensions, ScrollView } from 'react-native'

const Imagens = [
    'https://lh3.googleusercontent.com/KaSil5O1umzDqBdT_hBZ6uEV2sKlPfWZrFnnWL1tRw1maGsQ0m-TMbgSMRscCD0z_TCfxxlWU_Aj8KfhYohVw5gCvTaQ0lgjFywLBBzVz0_M0VQ_V9fo3H0b_Zio8otnM4eIwT2ZagbJdApZoRst7enAOhN0ovOm5AA0IcIhUklQastLFf5e9C3SEH-hUPWFpkwhFNPZz6kl9TPD2wuGJsJmlB621Ae039-EB6FEI0h-yOuyDf4ILdj4n8AWSWfbm4DlcH1pe5WmG7-9d7SdAq0QzkA4XimZx5EmZ3kSdWYOIRdDRxKQAIK2PJTFWPUxgb-9R4VuSDIXVKYHcCtpRAq-N_VqIDhXZ0Ex2M_sS1TA31oNmI-W5baQkCeNeIoodvzV9I65jJqvVw2ptLzrfK3F1u-ZYRycLabZjRpe-IFAOKZpBreOjFlM-r9k1X5tDpB1wEtROcKJPT8ugTdSUF2eEwwsn3zA2PUSm-kWitgEuA5L2ZJ8vUuGeUEWbGFQjBgWtQ_vHDizeCb0utQ3lOzcu0I0QqwiWZ_ohXnRI75Fcxq5dlB9q585ooOyGsTfgi2n918Q8M9IjpTN7cQ0WJpKLMXKawhHe-TRv_UcPEK24yq0bBjM5cEd-_SZbU8RdTFff_hvo_32Hsy29w-iGAMuX3iLVkjjXjHsR54haD2450aVXoFx3FFXI676-Qz402fpQL0wRxt8h6CxIV5XvKo=w1284-h620-no?authuser=0',
    'https://lh3.googleusercontent.com/QeV5bEyZy68TcOSj9DYTrF3tUs4ByZhYhDpNhUaVxDytIxSyrkBMUAi5y5aWIUNm_sNn2KOTnKNobk-ays44nfG7WX0cC6RZO8s2aV9Q8crWT_blaWgOIlrwTi5bWlEiMtwov5Xqf0khM81hrmZOZZnWQ8MuSlb0eNFIt6fv9pWHvLWmobBtXxfK_7OHRHMCtlUABM9d_G-ohPVX0_CqggaLnaeUgv-M5UGOao0AvrMQ1mnsHrHFHc5upfD392zbhMTxjepNtoAIqrML8B7Ud5PhncymCewBMVdGExXWPsctoOLG-9xsaUsCKG2Cx6BqUceFG8h3CJShbYJjPhsaLYG326Y3BspaGsrMyN19vfT9aoT0e-XWOno--Bghh0Jq127HwyNXvGtoaib-ocBVPVBM6CSCbs0d5F_-IaplZ7omheYaxjbzI4VRjR57oESKpwr5shCgxsrdaPyUnBlBZ4zV_31ASuU6mITXvCnO_31aJTdPhLZJs2NlAA1HRNbY4-uI3YmI-bXNmXU6Qly14e-NOK65zTzZlWxfrZWR15n9rJTmMv4LR4EGZZY5HCTHqF4cSjxr265W_YoX720qpVKS-RTBJMml-ExXtJYeMNyafD1udh1pb-hF3tOdnBeyDZXd8et17a7neG15NjxWnKWcNZ9bco9Qi5AYK57y6YaqDSGbiDeAZthpiNAKcT7LXKjUmtGi1-u1GIpCIqaRY1A=w1236-h620-no?authuser=0',
    'https://lh3.googleusercontent.com/uJmGYNHZiJs8auDJbcNt0v1_vWVtm4yP_bqGabI7b60HhvbztiPj1dJcuYBuD8d3_cMP27YgIytIqoWUbBl_4iSlPObzhf3sCG6UWG2wTa9vkVc-rjeTyqgfYdrfBLoqOYa7fpRXQ98GGldFjGq-dsN1bmqsNv7hvE6OwynBEn0fDIQVERsZ2QNf8MTW_WtnWyjqMk1MRl5G9g2pyKX8FZqX_CfzkIHV8ybSJ_7e9XTi20ORw0fBVnXTZAMmcFxHWgnZBa1RyEUyYFZjLgrgNDw73uJaFgO9jHIqxD3lSVpB7OF7OtcEWLr0EitJN1c82c-DrfP-TgKYg7jsI3b4lHMVb_cD_Y3MbRkrie1hQ6ueAd45vKzDwNr5oIIAy3rWhRXp0EPf5BCeZtbbpB_GfuUf8ErfDb95aeASpiWENVzY3QVWsbW3TNVS4a62NwDgoTFRfQqH9wM8_APy5vm6nrWr1fZfwxy9D4TbzPNC1Miu11PcjSag0BIHa55cXVWCn8Jn0Nj-HdDa2I8-6h7vfKg3tx4ePNQfj_FhpoXqATYd5EjfOrgInxMnBEAO_geCDcVmirldrfLHAs9FV9rdSUv5yIfLALPtHSmgjfDTAzyCbzdeBKqF_E5qZqisvK6CbtUHBpFIaQrMQ4CIlZXkoJOrtke6N0OLyQllVH5cQR3EoOzcIbIJABO4vw7RDogswCJ5GYiaDvS8JMMgneFm5Nc=w1224-h620-no?authuser=0',
]
const HEIGHT = Dimensions.get('window').height;


const Carrossel = () => {
    const [imgActive, setimgActive] = useState(0);

    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {
                        Imagens.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={{ uri: e }}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        Imagens.map((e, index) =>
                            <Text
                                key={e}
                                style={imgActive == index ? styles.dotActive : styles.dot}>
                                ⬤
                            </Text>
                        )
                    }

                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:10
    },
    wrap: {
        width: 340,
        height: HEIGHT * 0.22,
        alignSelf: 'center',
        borderRadius: 2,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',

    },
    dotActive: {
        margin: 3,
        color: 'black'
    },
    dot: {

        margin: 3,
        color: 'white'
    }
});
export default Carrossel;