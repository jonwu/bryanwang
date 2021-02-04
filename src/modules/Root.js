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
            Hi I am Crystina, a current MMath (Master of Mathematics) student at
            University of Waterloo, supervised by Jimmy Lin. I received my
            Bachelor Degree in Computer Science at Hong Kong University of
            Science and Technology. I was an research intern at Max Planck
            Institut für Informatik and NAVER (네이버), and exchanged to
            University of California, Los Angelas and University of Waterloo
            during my undergraduate. My current research interests lies under
            the intersection between Information Retrieval and Natural Language
            Processing, especially targeting on data efficiency.
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
                  label: "Tensor Flow",
                  backgroundColor: theme.yosemiteOrange(),
                },
                {
                  label: "Python",
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
            Qui quis nostrud adipisicing aliqua ullamco veniam ipsum excepteur
            consectetur amet exercitation reprehenderit pariatur. Ex voluptate
            elit consequat fugiat. Enim deserunt commodo in cupidatat non
            voluptate consequat nostrud.
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
                { label: "PyTorch", backgroundColor: theme.yosemiteBlue() },

                {
                  label: "Python",
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
            Anim exercitation proident ipsum officia ut minim voluptate do anim
            veniam commodo. Sit qui non occaecat sit dolor dolor velit proident
            veniam id laboris. Nostrud reprehenderit magna ex consequat
            adipisicing id excepteur voluptate mollit ut dolor proident.
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
          <Project />
          <Project />
          <Project />
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
