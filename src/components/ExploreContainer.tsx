import { IonButton, IonContent, IonInput, IonItem, IonList, IonPopover } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonList>
        <IonItem button={true} detail={false}>
          External Option 1
        </IonItem>
        <IonItem button={true} detail={false}>
          External Option 2
        </IonItem>
        <IonItem button={true} detail={false}>
          <IonInput label="let's try an input"></IonInput>
        </IonItem>
      </IonList>
      <IonButton id="popover-button">Open Menu</IonButton>
      <IonPopover trigger="popover-button" dismissOnSelect={true}>
        <IonContent>
          <IonList>
            <IonItem button={true} detail={false}>
              Option 1
            </IonItem>
            <IonItem button={true} detail={false}>
              Option 2
            </IonItem>
            <IonItem button={true} detail={false}>
              <IonInput label="Input"></IonInput>
            </IonItem>
            <IonItem button={true} id="nested-trigger">
              More options...
            </IonItem>

            <IonPopover trigger="nested-trigger" dismissOnSelect={true} side="end">
              <IonContent>
                <IonList>
                  <IonItem button={true} detail={false}>
                    Nested option
                  </IonItem>
                </IonList>
              </IonContent>
            </IonPopover>
          </IonList>
        </IonContent>
      </IonPopover>
    </div>
  );
};

export default ExploreContainer;
