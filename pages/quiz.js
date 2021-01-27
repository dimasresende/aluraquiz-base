import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function Home() {

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz de boardgames</h1>
          </Widget.Header>
          <Widget.Content>
            Questões do Quiz...
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <p>Quiz de terceiros</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/dimasresende" />
    </QuizBackground>
  );
}
