import React, { Children } from "react";
import { useThemeKit } from "hooks/useThemeKit";
import imgBryan from "assets/bryan.jpg";
import View from "components/View";
import ListView from "components/ListView";
import TouchableOpacity from "components/TouchableOpacity";
import { RiMoonFill } from "react-icons/ri";
import { toggleTheme } from "reducers/settings";
import { useDispatch } from "react-redux";

const RootWrapper = () => {
  const { theme, gstyles } = useThemeKit();
  React.useEffect(() => {
    document.body.style.backgroundColor = theme.bg2();
  }, [theme]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: theme.bg2(),
        }}
      />
      <Root />
    </>
  );
};

const Root = React.memo(() => {
  const { theme, gstyles } = useThemeKit();
  const dispatch = useDispatch();
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <View
        style={{
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <TouchableOpacity
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            backgroundColor: theme.bg2(0.8),
            borderRadius: 4,
            margin: theme.spacing_2,
            padding: theme.spacing_5,
            //   marginTop: 32,
            alignSelf: "flex-start",
          }}
          onClick={() => dispatch(toggleTheme())}
        >
          <View row style={{ alignItems: "center" }}>
            <div
              style={{
                ...gstyles.p1_bold,
                color: theme.text(),
                marginRight: theme.spacing_2,
              }}
            >
              {theme.id === 0 ? "DARK" : "LIGHT"}
            </div>
            <RiMoonFill size={24} color={theme.text()} />
          </View>
        </TouchableOpacity>
        <View style={{ maxWidth: 720, width: "80%" }}>
          <View row style={{ justifyContent: "space-between" }}>
            <img
              style={{
                height: 320,
                width: "90%",
                maxWidth: 320,
                objectFit: "cover",
                borderRadius: 360,
                borderColor: theme.yosemiteGrey(0.25),
                borderWidth: 32,
                borderStyle: "solid",
                marginLeft: -32,
                marginTop: 32,
                // alignSelf: "center",
              }}
              src={imgBryan}
            />
          </View>
          <div
            style={{
              ...gstyles.h1_bold,
              color: theme.yosemitePink(),
              // textAlign: "center",
              marginTop: theme.spacing_1 * 2,
              marginBottom: theme.spacing_2,
            }}
          >
            About me
          </div>
          <View
            style={{
              height: 2,
              backgroundColor: theme.yosemitePink(),
              // marginLeft: theme.spacing_1,
              // marginRight: theme.spacing_1,
            }}
          />
          <div
            style={{
              ...gstyles.p1,
              color: theme.text(),
              marginTop: theme.spacing_1,
            }}
          >
            Hi, I'm Bryan. I graduated from UC Berkeley in 2017 with a degree in Math. After graduating, I interned and then worked full-time at Bill.com, an accounting platform for small businesses. I love data science and ML, especially NLP.
          </div>
          <div
            style={{
              ...gstyles.h1_bold,
              color: theme.yosemitePink(),
              // textAlign: "center",
              marginTop: theme.spacing_1 * 2,
              marginBottom: theme.spacing_2,
            }}
          >
            Experience
          </div>
          <View
            style={{
              height: 2,
              backgroundColor: theme.yosemitePink(),
              // marginLeft: theme.spacing_1,
              // marginRight: theme.spacing_1,
              marginBottom: theme.spacing_1,
            }}
          />
          <View row style={{ alignItems: "center" }}>
            <div
              style={{
                ...gstyles.p1_bold,
                color: theme.text(),
                marginTop: theme.spacing_2,
                marginBottom: theme.spacing_2,
              }}
            >
              NLP
            </div>
            <View style={{ flex: 1 }} />
            <ListView
              style={{ marginLeft: theme.spacing_1 }}
              horizontal
              data={[
                { label: "PyTorch", backgroundColor: theme.yosemiteOrange() },
                {
                  label: "TensorFlow",
                  backgroundColor: theme.yosemiteOrange(),
                },
                {
                  label: "Sklearn",
                  backgroundColor: theme.yosemiteOrange(),
                },
              ]}
              renderSeparatorComponent={() => <View style={{ width: 4 }} />}
              renderItem={(item) => {
                return (
                  <View
                    style={{
                      padding: theme.spacing_2,
                      paddingTop: theme.spacing_5,
                      paddingBottom: theme.spacing_5,
                      backgroundColor: item.backgroundColor,
                      borderRadius: 4,
                    }}
                  >
                    <div
                      style={{ ...gstyles.footnote_bold, color: theme.light() }}
                    >
                      {item.label.toUpperCase()}
                    </div>
                  </View>
                );
              }}
            />
          </View>
          <div style={{ ...gstyles.p1, color: theme.text() }}>
            I researched and developed ML solutions to extract information from semi-structured invoices. I created a model that extracts invoice fields, such as invoice date, with 88% accuracy. The problem was hard because we had a limited amount of data, and each customer had a different invoice template. Not only did I develop models, I also brought them to production and built infrastructure as well.
          </div>
          <View
            row
            style={{
              alignItems: "center",
              marginTop: theme.spacing_1,
              marginBottom: theme.spacing_2,
            }}
          >
            <div
              style={{
                ...gstyles.p1_bold,
                color: theme.text(),
              }}
            >
              FRAUD DETECTION
            </div>
            <View style={{ flex: 1 }} />
            <ListView
              style={{ marginLeft: theme.spacing_1 }}
              horizontal
              data={[
                { label: "Pandas", backgroundColor: theme.yosemiteBlue() },

                {
                  label: "Catboost",
                  backgroundColor: theme.yosemiteBlue(),
                },
                {
                  label: "Java",
                  backgroundColor: theme.yosemiteBlue(),
                },
              ]}
              renderSeparatorComponent={() => <View style={{ width: 4 }} />}
              renderItem={(item) => {
                return (
                  <View
                    style={{
                      padding: theme.spacing_2,
                      paddingTop: theme.spacing_5,
                      paddingBottom: theme.spacing_5,
                      backgroundColor: item.backgroundColor,
                      borderRadius: 4,
                    }}
                  >
                    <div
                      style={{ ...gstyles.footnote_bold, color: theme.light() }}
                    >
                      {item.label.toUpperCase()}
                    </div>
                  </View>
                );
              }}
            />
          </View>

          <div style={{ ...gstyles.p1, color: theme.text() }}>
            I built and deployed risk models that flag fraudulent accounts on our network. The new system reduces the volume of reviewed transactions with fraud capture rate of 60%. I wrote the model, deployment scripts, and the integration code with the main application. 
          </div>
          <div
            style={{
              ...gstyles.h1_bold,
              color: theme.yosemitePink(),
              // textAlign: "center",
              marginTop: theme.spacing_1 * 2,
              marginBottom: theme.spacing_4,
            }}
          >
            Projects
          </div>
          <View
            style={{
              height: 2,
              backgroundColor: theme.yosemitePink(),
              // marginLeft: theme.spacing_1,
              // marginRight: theme.spacing_1,
            }}
          />
        <View>
          <View
            row
            style={{
              alignItems: "center",
              marginTop: theme.spacing_1,
              marginBottom: theme.spacing_2,
            }}
          >
            <div
              style={{
                ...gstyles.p1_bold,
                color: theme.text(),
              }}
            >
              HANDS FREE MUSIC APP
            </div>
          </View>

          <div style={{ ...gstyles.p1, color: theme.text() }}>
            Developer of an iOS app that uses voice commands (keyword spotting) to control Apple Music. Use case is for switching songs while exercising or doing an activity where it’s hard to use your hands.
          </div>
        </View>          
        <View>
          <View
            row
            style={{
              alignItems: "center",
              marginTop: theme.spacing_1,
              marginBottom: theme.spacing_2,
            }}
          >
            <div
              style={{
                ...gstyles.p1_bold,
                color: theme.text(),
              }}
            >
              AIRBNB SCRAPER
            </div>
          </View>

          <div style={{ ...gstyles.p1, color: theme.text() }}>
            Developer of a service that scrapes Airbnb booking data every day for all 1 million+ listings in North America, and stores results in MongoDB.
          </div>
        </View>
          <View style={{ height: theme.spacing_1 * 4 }} />
        </View>
      </View>
    </div>
  );
  //   return (
  //     <View row style={{ height: "100vh" }}>
  //       <View
  //         style={{
  //           flex: 1,
  //           paddingTop: 32,
  //           alignItems: "center",
  //           backgroundColor: theme.yosemiteGrey(),
  //         }}
  //       >
  //         <img style={{ width: "80%", borderRadius: 32 }} src={imgBryan} />
  //       </View>
  //       <View
  //         style={{ flex: 1, padding: 32, backgroundColor: theme.yosemitePink() }}
  //       >

  //       </View>
  //     </View>
  //   );
});

const Project = () => {
  const { gstyles, theme } = useThemeKit();
  return (
    <View>
      <View
        row
        style={{
          alignItems: "center",
          marginTop: theme.spacing_1,
          marginBottom: theme.spacing_2,
        }}
      >
        <div
          style={{
            ...gstyles.p1_bold,
            color: theme.text(),
          }}
        >
          FRAUD DETECTION
        </div>
      </View>

      <div style={{ ...gstyles.p1, color: theme.text() }}>
        Anim exercitation proident ipsum officia ut minim voluptate do anim
        veniam commodo. Sit qui non occaecat sit dolor dolor velit proident
        veniam id laboris. Nostrud reprehenderit magna ex consequat adipisicing
        id excepteur voluptate mollit ut dolor proident.
      </div>
    </View>
  );
};

export default RootWrapper;
