import Head from 'next/head'

export default function Header(props) {
return (
    <div>
        <Head>
        <title>{props.judul}</title>
        </Head>
    </div>
);
}
