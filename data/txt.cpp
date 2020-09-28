#include <stdio.h>

int main(){
	FILE *fp[24];
	char fname[20]="00hour.txt";
	
	for(int i=0;i<2;i++){
		for(int j=0;j<10;j++){
			fname[1]=j+'0';
			fp[i*10+j]=fopen(fname, "w");
			for(int k=0;k<60;k++){
				for(int l=0;l<60;l++)
					fprintf(fp[i*10+j], "%c%c%02d%02d   \n", fname[0], fname[1], k, l);
			}
		}
		fname[0]++;
	}
		for(int j=0;j<4;j++){
			fname[1]=j+'0';
			fp[2*10+j]=fopen(fname, "w");
			for(int k=0;k<60;k++){
				for(int l=0;l<60;l++)
					fprintf(fp[2*10+j], "%c%c%02d%02d   \n", fname[0], fname[1], k, l);
			}
		}
	
	return 0;
}
