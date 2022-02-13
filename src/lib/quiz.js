import React from 'react'
import ExternalLink from '../components/external-link'

export const problems = [
  {
    type: '日本の平均賃金',
    text:
      '日本では、男性と女性と平均賃金の関係はどうなっているか',
    short: '日本の平均賃金',
    choices: {
      a: '男性のほうが女性より平均賃金が高い',
      b: '女性のほうが男性より平均賃金が高い',
      c: 'どちらもほぼ同じ程度である'
    },
    explanation: (
      <>
        国立社会保障・人口問題研究所が作成した「
        <ExternalLink href="http://www.ipss.go.jp/pp-zenkoku/j/zenkoku2017/pp29_Report3.pdf">
          日本の将来推計人口(2017年版・執筆時最新)
        </ExternalLink>
        」の死亡中位・出生中位推計によると、2019年の65歳以上人口は
        <strong>約3592万人</strong>で、2059年は<strong>約3571万人</strong>
        。つまり今とほとんど変わらない。ピークの2042年(約3935万人)でも今より10%多いくらいだ。
      </>
    ),
    factfulness: (
      <>
        『ファクトフルネス』の第3章では、何かの数が直線的に増えるという思い込み「
        <strong>直線本能</strong>
        」について書かれている。高齢者の数は2040年後半には減少していく。このままひたすら直線的に増え続けることはない。もちろん社会の高齢化は進むし、若者の絶対数は減り続けるが、高齢者の絶対数が増え続けるわけではない。だから、たとえば介護施設を将来にわたって作り続けるのは愚策だ。
      </>
    ),
    trust: (
      <>
        人口予測はかなり正確だが、この問題はさらに予測しやすい。2059年の65歳以上人口は、2019年の25歳以上人口とその死亡率が基になるからだ。転入数・転出数(移民など)も影響するが、700万人近い誤差がでないと「今と比べて20%ほど増える」にならない。ちなみにここで取り上げているのは死亡中位・出生中位という最も現実的なシナリオでの推計。
      </>
    ),
    answer: 'a'
  },
  {
    type: '日本の勤労人口',
    text:
      '日本で就労しているのは全人口の何％程度か',
    short: '日本の勤労人口',
    choices: {
      a: '30%',
      b: '50%',
      c: '70%'
    },
    explanation: (
      <>
        「
        <ExternalLink href="https://www.npa.go.jp/hakusyo/h30/honbun/html/u5110000.html">
          警察白書(2018年版・執筆時最新)
        </ExternalLink>
        」
        には、2008年〜2017年のあいだに「65歳以上の人口10万人当たり(交通事故)死者数は
        <strong>36.4％減少した</strong>
        」とある。しかもこの間、毎年減少している。割合だけでなく、65歳以上の交通事故死者数そのものも減っている。ただ、全年齢層の死者数はそれより早いペースで減り続けている。
      </>
    ),
    factfulness: (
      <>
        『ファクトフルネス』の第2章では、世の中が悪くなっているという思い込み「
        <strong>ネガティブ本能</strong>
        」について書かれている。高齢者の交通事故死者数はどんどん増えていると思いがちだが、実際はそうではない。ちなみに
        <ExternalLink href="https://www8.cao.go.jp/koutu/taisaku/h29kou_haku/gaiyo/features/feature01.html">
          内閣府によると
        </ExternalLink>
        、「75歳」以上の後期高齢者が「起こした」死亡事故の数は2006年〜2016年の11年間でほぼ横ばいだが(423件
        → 459件)、死亡事故全体に占める割合はほぼ倍増している(7.4% →
        13.5%)。しかし一方で、75歳以上の運転免許保有者数も同期間にほぼ倍増している(258万人
        → 513万人)ことも忘れてはならない。
      </>
    ),
    trust: (
      <>
        高齢者の人口は分かっているし、死者が出た交通事故は今回のソース元である警察がほぼ正確に把握していると思われる。
      </>
    ),
    answer: 'b'
  },
  {
    type: '埼玉に住んでいる人口',
    text:
      '埼玉県に住んでいるのは日本の人口の何％程度か',
    short: '埼玉に住んでいる人口',
    choices: {
      a: '5%',
      b: '10%',
      c: '30%'
    },
    explanation: (
      <>
        <ExternalLink href="http://www.moj.go.jp/nyuukokukanri/kouhou/nyuukokukanri04_00076.html">
          法務省による執筆時最新のデータによれば
        </ExternalLink>
        、2018年6月末における在留外国人数は<strong>約264万人</strong>
        。これは中長期在留者数(約231万人)と特別永住者数(約33万人)を足した数。
        <ExternalLink href="http://www.stat.go.jp/data/jinsui/pdf/201807.pdf">
          総務省によれば
        </ExternalLink>
        、同時期の日本の人口は1億2659万人なので、在留外国人数の割合は
        <strong>2.1%</strong>
        となる。ちなみに、
        <ExternalLink href="https://blogos.com/article/135489/">
          こちらの記事にもあるように
        </ExternalLink>
        (一次ソースは同じ法務省のデータ)、在留外国人は圧倒的に若者が多い。一方で日本人の若者は少ないため、若者同士の比率で見ると先ほどの数値の倍以上になる。
      </>
    ),
    factfulness: (
      <>
        『ファクトフルネス』の第5章では、実際よりも数字を大きくとらえてしまう思い込み「
        <strong>過大視本能</strong>
        」について書かれている。在留外国人数のように、総数ではなく割合を見ると、意外と小さな数字だと思えることは多い。
      </>
    ),
    trust: (
      <>
        不法滞在もあるかもしれないが、全体の264万人に比べれば誤差の範囲だろう。
        この質問に5%と答えた人は実際より400万人、8%と答えた人は実際より800万人も多くの在留外国人がいる、と考えていたことになる。それほどの人数になるには、毎年40万人の外国人を受け入れても、単純計算でそれぞれ10年・20年近くかかる。
      </>
    ),
    answer: 'a'
  },
  {
    type: '生活満足度',
    subtext:
      '生活満足度＝生活全般の主観的な満足度',
    text:
      '生活満足度と収入の関係について正しいものを選びなさい ',
    short: '生活満足度',
    choices: {
      a: '単純に収入が高いほど生活満足度が高い',
      b: '単純に収入が低いほど生活満足度が高い',
      c: '収入が高いほど生活満足度が高いが、一定値を越えると生活満足度がむしろ下がる'
    },
    factfulness: (
      <>
        3問目と同じく、こちらも『ファクトフルネス』の第5章で紹介されていた「
        <strong>過大視本能</strong>
        」の一例だ。「地方は公務員くらいしか仕事がない」という思い込みもあるかもしれない。
      </>
    ),
    explanation: (
      <>
        <ExternalLink href="http://www.soumu.go.jp/iken/kazu.html">
          総務省による執筆時最新のデータによれば
        </ExternalLink>
        、2017年の地方公務員の総職員数は<strong>約274万人</strong>
        。これには福祉部門、福祉を除く一般行政部門、教育部門、警察部門、消防部門、公営企業等会計部門が含まれている。一方、15〜64歳人口は同じく
        <ExternalLink href="https://www.stat.go.jp/data/jinsui/2017np/index.html">
          総務省によると
        </ExternalLink>
        7596万人。割合を計算すると<strong>3.6%</strong>
        となるので、四捨五入して約4%とした。
      </>
    ),
    trust: (
      <>
        人口や地方公務員の人数はほぼ誤差がなく把握されているのではないか。この質問に8%と答えた人は実際の倍、12%と答えた人は実際の3倍の地方公務員がいると考えていることになる。
      </>
    ),
    answer: 'c'
  }
]

export const score = selectedAnswers =>
  selectedAnswers.filter((answer, index) => problems[index].answer === answer)
    .length
