import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{
            delay: 0,
            duration: 0.5,
          }}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0},
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>Quiz de boardgames</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Digite seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                JOGAR
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0},
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quiz de terceiros</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.');
                return (
                  <li key={linkExterno}>
                    <Widget.Topic href={`/quiz/${projectName}___${githubUser}`}>
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0},
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/dimasresende" />
    </QuizBackground>
  );
}
